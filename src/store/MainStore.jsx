import {configureStore} from '@reduxjs/toolkit'
import ActiveHeader from './ActiveHeader'

const MainStore = configureStore({
    reducer: {
        'active_header':ActiveHeader.reducer
    }
})

export default MainStore