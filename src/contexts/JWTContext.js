import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
// utils
import axios from '../utils/axios';
import { isValidToken, setSession } from '../utils/jwt';

// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  team: null
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user, team } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
      team
    };
  },
  LOGIN: (state, action) => {
    const { user, team } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
      team
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
    team: null
  }),
  REGISTER: (state, action) => {
    const { user, team } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
      team
    };
  },
  UPDATE: (state, action) => {
    const { data } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user: { ...state.user, ...data }
    };
  }
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
  ...initialState,
  login: () => Promise.resolve(),
  workerLogin: () => Promise.resolve(),
  companyRegister: () => Promise.resolve(),
  logout: () => Promise.resolve()
});

AuthProvider.propTypes = {
  children: PropTypes.node
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken');
        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          const response = await axios.get('/api/account/my-account');
          const { user, team } = response.data;
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user,
              team
            }
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null,
              team: null
            }
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
            team: null
          }
        });
      }
    };

    initialize();
  }, []);

  const login = async (email, password) => {
    const response = await axios.post('/login', {
      email,
      password
    });
    const { data } = response;
    if (data && data.success) {
      const { token, teams } = data.payload;
      setSession(token);

      dispatch({
        type: 'LOGIN',
        payload: {
          user: { teams }
        }
      });
    }

    return data;
  };

  const workerLogin = async (token, password) => {
    const response = await axios.post('/user/invite/password', { invite_token: token, password });
    const { data } = response;
    if (data && data.success) {
      const { token, teams } = data.payload;
      setSession(token);

      dispatch({
        type: 'LOGIN',
        payload: {
          user: { teams }
        }
      });
    }

    return data;
  };

  const companyRegister = async (payload) => {
    const response = await axios.post('/company/signup', { ...payload });
    const { data } = response;

    window.localStorage.setItem('accessToken', data.payload.token);
    dispatch({
      type: 'REGISTER',
      payload: {
        user: data.payload.user
      }
    });
  };

  const logout = async () => {
    await axios.get('/logout');

    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  const resetPassword = () => {};

  const updateProfile = (data) => {
    dispatch({
      type: 'UPDATE',
      payload: {
        data
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        workerLogin,
        logout,
        companyRegister,
        resetPassword,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
