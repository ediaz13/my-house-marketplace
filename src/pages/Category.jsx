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
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import ListingItem from "../components/ListingItem";

function Category() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get reference
        const listingsRef = collection(db, "listings");

        //console.log(listingsRef);
        // Create Query
        const q = query(
          listingsRef,
          where('type', '==', params.categoryName),
          orderBy('timestamp', 'desc'),
          limit(10)
        )

        // Execute Query
        const querySnap = await getDocs(q);

        let listings = [];

        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data()
          })
        })

        setListings(listings);
        setLoading(false);
      } catch (error) {
        console.error(error);
        toast.error("Error loading listings");
      }
    };
    fetchListings();
  }, [params.categoryName]);

  return (
    <div className="category">
      <header>
        <p className="pageHeader">
          {params.categoryName === 'rent'
            ? 'Places for rent'
            : 'Places for sale'}
        </p>
      </header>

      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
        <main>
          <ul className="categoryListings">
            {listings.map((listing) => (
              <ListingItem
                key={listing.id}
                listing={listing.data}
                id={listing.id}
              />
            ))}
          </ul>
        </main>
        </> 
      ) : (
        <p>No listings for {params.categoryName}</p>
      )}
    </div>   
  )
  
}

export default Category;
