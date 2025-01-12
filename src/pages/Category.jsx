import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function Category() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get reference
        const listingsRef = collection(db, "listings");

        // Create Query
        const q = query(
          listingsRef,
          where("type", "==", params.categoryName),
          orderBy("timeS", "desc"),
          limit(10)
        )

        // Execute Query
        const querySnap = await getDocs(q);

        let listings = [];

        querySnap.forEach((doc) => {
          listings.push({ ...doc.data(), id: doc.id });
        })

      } catch (error) {
        toast.error("Error loading listings");
      }
    };
    fetchListings();
  });

  return <div>Category</div>;
}

export default Category;
