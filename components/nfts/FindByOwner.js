import React, { useState } from "react";
import { gql } from "@apollo/client";
import Search from "/components/nfts/Search";

export default function FindByWallet() {
  const [address, setAddress] = useState();

  const doSearch = async (e) => {
    const addy = document.getElementById("address").value;
    setAddress(addy);
  };

  const query = gql`
    query GetNft($address: [PublicKey!]) {
      nfts(owners: $address, offset: 0, limit: 100000) {
        name
        address
        image(width: 1400)
        sellerFeeBasisPoints
        mintAddress
        description
        owner {
          address
        }
      }
    }
  `;

  return (
    <>
      <article className="prose prose-slate">
        <p className="dark:text-white">Find NFT&apos;s by wallet.</p>
        <input
          id="address"
          className="border border-gray-200 dark:border-gray-600 px-4 py-2 w-full rounded-lg inline dark:text-white"
        />
        <button
          className="rounded-lg inline ml-1 bg-blue-500 px-4 py-2 text-white float-right mt-2 hover:bg-blue-600 disabled:bg-gray-300"
          onClick={(e) => doSearch(e)}
        >
          Search
        </button>
      </article>
      <Search address={address} query={query} searchBy="wallet" />
    </>
  );
}
