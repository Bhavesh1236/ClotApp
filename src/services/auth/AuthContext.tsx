import React, { createContext, useState, useContext, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

interface AuthContextType {
  user: any;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  googleSignIn: () => Promise<void>;
  isLoggedIn: boolean;
  deleteAccount: () => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  loading: true,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
  googleSignIn: async () => {},
  deleteAccount: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '658814428344-0mrgd21qg92dvp5oe0823ud4m4c9nbfp.apps.googleusercontent.com',
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], //https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/drive
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      console.log("Signing in with email and password", email, password);
      await auth().signInWithEmailAndPassword(email, password).then(() => {
        console.log('User signed in successfully!');
        return true;
      }).catch(error => {
        if (error.code === 'auth/user-not-found') {
          throw new Error('No user found with this email!');
        }

        if (error.code === 'auth/wrong-password') {
          throw new Error('Wrong password!');
        }

        if (error.code === 'auth/invalid-email') {
          throw new Error('That email address is invalid!');
        }
        
        console.error(error);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password).then(() => {
        console.log('User account created & signed in!');
      }).catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          throw new Error('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          throw new Error('That email address is invalid!');
        }

        throw new Error(error);
      });
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const signOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  const googleSignIn = async () => {
    try {
      // First, make sure the user is signed out of Google
      await GoogleSignin.signOut();
      
      // Check if Play Services are available
      await GoogleSignin.hasPlayServices();
      
      // Perform the sign-in
      const userInfo: any = await GoogleSignin.signIn();
      console.log('userInfo:',userInfo);
      
      // Get the auth credential
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo?.idToken);
      console.log('googleCredential:',googleCredential);
      
      // Sign in to Firebase with the credential
      auth().signInWithCredential(googleCredential).then((res: any) => {
        console.log('res googleSignIn:',res);
        return res;
      }).catch((error: any) => {
        console.error(error);
      });
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        throw new Error('User cancelled the sign-in flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        throw new Error('Sign in is in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        throw new Error('Play services not available');
      } else {
        throw new Error('Google Sign-In Error:' + error.message);
      }
    }
  };

  const deleteAccount = async () => {
    try {
      const currentUser = auth().currentUser;
      if (currentUser) {
        await currentUser.delete();
        setUser(null);
      }
    } catch (error) {
      console.error('Error deleting account:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut, googleSignIn, isLoggedIn: user !== null, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 