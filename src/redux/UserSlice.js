/*import { createSlice, createAsyncThunk, asyncThunkCreator } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { store } from './store'

export const login = createAsyncThunk('user/login', async ({ Email, Password }) => {
    console.log("Email:", Email)
    console.log("pas", Password)


    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, Email, Password)

        const user = userCredential.user
        const token = user.stsTokenManager.accessToken;

        const userData = {
            token,
            user: user
        }

        return userData
    } catch (error) {
        console.log("userSlice 21.line", error)
        throw error
    }


})







const initialState = {
    Email: null,
    Password: null,
    Isloading: false,
    IsAuth: false,
    token: null,
    user: null,
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.Email = action.payload.toLowerCase()
        },
        setPassword: (state, action) => {
            state.Password = action.payload
        },
        setIsloading: (state, action) => {
            state.Isloading = action.payload
        },
        /*setLogin: (state) => {
            if ((state.Email === state.users.userEmail) && (state.Password === state.users.userPassword)) {
                state.IsAuth = true
                console.log(true)
            }
            else {
                console.log(false)
            }
        },*//*
},
extraReducers: (builder) => {
builder
.addCase(login.pending, (state) => {
state.Isloading = true
state.IsAuth = false

})
.addCase(login.fulfilled, (state, action) => {
state.Isloading = false
state.IsAuth = true
state.user = action.payload.user
state.token = action.payload.token
})
.addCase(login.rejected, (state, action) => {
state.Isloading = false
state.IsAuth = false
state.error = action.error.message
})

}

})

export const { setEmail, setPassword, setIsloading } = userSlice.actions
export default userSlice.reducer;
*/



/*
import { createSlice, createAsyncThunk, asyncThunkCreator } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { store } from './store'

export const login = createAsyncThunk('user/login', async ({ Email, Password }) => {
    console.log("Email:", Email)
    console.log("pas", Password)


    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, Email, Password)

        const user = userCredential.user
        const token = user.stsTokenManager.accessToken;

        const userData = {
            token,
            user: user,
        }

        return userData
    } catch (error) {
        console.log("userSlice 21.line", error)
        throw error
    }


})







const initialState = {
    Email: null,
    Password: null,
    Isloading: false,
    IsAuth: false,
    token: null,
    user: null,
    error: null,
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.Email = action.payload.toLowerCase()
        },
        setPassword: (state, action) => {
            state.Password = action.payload
        },
        setIsloading: (state, action) => {
            state.Isloading = action.payload
        },
        /*setLogin: (state) => {
            if ((state.Email === state.users.userEmail) && (state.Password === state.users.userPassword)) {
                state.IsAuth = true
                console.log(true)
            }
            else {
                console.log(false)
            }
        },*//*
},
extraReducers: (builder) => {
builder
.addCase(login.pending, (state) => {
state.Isloading = true
state.IsAuth = false

})
.addCase(login.fulfilled, (state, action) => {
state.Isloading = false
state.IsAuth = true
state.user = action.payload.user
state.token = action.payload.token
})
.addCase(login.rejected, (state, action) => {
state.Isloading = false
state.IsAuth = false
state.error = action.error.message
})

}

})

export const { setEmail, setPassword, setIsloading } = UserSlice.actions;
export default UserSlice.reducer;
*/


import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    value: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        },
        clearUser: (state) => {
            state.value = null;
        },

    },
});

export const { setUser, clearUser, logout } = userSlice.actions;
export default userSlice.reducer;


