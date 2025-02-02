import React, { createContext, useState, useContext, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

interface AuthContextType {
  user: any;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  googleSignIn: () => Promise<FirebaseAuthTypes.User | void>;
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
      webClientId: '658814428344-9ijr452f789i1dp5q4u548p8oijgo7p9.apps.googleusercontent.com',
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
      const currentUser = GoogleSignin.getCurrentUser();
      if(currentUser?.idToken){
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      } else {
        await auth().signOut();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const googleSignIn = async () => {
    try {
      // First, make sure the user is signed out of Google
      await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const userInfo: any= await GoogleSignin.signIn();      
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.data.idToken);
      // Return the result of signInWithCredential
      const result = await auth().signInWithCredential(googleCredential);
      console.log('Google Sign-In Success:', result.user);
      return result.user; // Return the user object        
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        throw new Error('User cancelled the sign-in flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        throw new Error('Sign in is in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        throw new Error('Play services not available');
      } else {
        console.error('Google Sign-In Error:', error);
        throw error; // Throw the error to be caught by the caller
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