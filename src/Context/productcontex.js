import axios from "axios";
import { createContext, useContext, useEffect } from "react";
const AppContext = createContext();


const API = "https: //api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {

    const getProducts = async(url) => {
        const res = await axios.get(url);
        
    }

    useEffect(() => {
        getProducts(API);

    }, [])

    return (<AppContext.Provider value={{ myName: "Amit" }}>
        {children}
    </AppContext.Provider>
    );
};



// Custom Hooks
const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };