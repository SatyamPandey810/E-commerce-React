import React, { useEffect, useState } from 'react';
import myContext from './MyContext';
import { toast } from 'react-toastify';
import { QuerySnapshot, Timestamp, addDoc, collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
const MyState = (props) => {
    const [mode, setMode] = useState('Light')
    const toggleMode = () => {
        if (mode === 'Light') {
            setMode('dark')
            document.body.style.backgroundColor = "rgb(17,24,39)"
        } else {
            setMode('Light')
            document.body.style.backgroundColor = "white"
        }
    }

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        discription: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )

    });
    const addProduct = async () => {
        if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
            return toast.error('Please fill all fields')
        }
        const productRef = collection(fireDB, "products")
        setLoading(true)
        try {
            await addDoc(productRef, products)
            toast.success("Product Add successfully")
            setTimeout(() => {
                window.location.href = '/dashboard'
            }, 800)
            
            getProductData()
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        setProducts("")
    }
    const [product, setProduct] = useState([]);
    const getProductData = async () => {
        setLoading(true)
        try {
            const q = query(
                collection(fireDB, 'products'),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id })
                });
                setProduct(productArray)
                setLoading(false)
            })
            return () => data;

        } catch (error) {
            console.log(error);
            setLoading(false)
        }

    }

    useEffect(() => {
        getProductData()
    }, [])
    return (
        <div>
            <myContext.Provider value={{ mode, toggleMode, loading, setLoading, products, setProducts, addProduct, product }} >
                {props.children}
            </myContext.Provider>

        </div>
    );
}

export default MyState;
