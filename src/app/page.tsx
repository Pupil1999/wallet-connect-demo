'use client'
import ConnectButton from "@/components/WalletButton";
import Address from "@/components/AddressShower";
import { useState } from "react";

export default function Home() {

  return (
    <main>
      <ConnectButton />

      <Address />
    </main>
  );
}
