"use client";

import { ArrowDownIcon, LocationIcon } from "@/assets/icons";
import Link from "next/link";
import React from "react";
import { HeaderTopStyle } from "./styles";

const HeaderTop = () => {
  return (
    <HeaderTopStyle>
      <div  className="containers header-top">
        <nav>
          <Link href={"/"}>
            <LocationIcon />
            <span>Tashkent</span>
          </Link>
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Products</Link>
          <Link href={"/"}>Contacts</Link>
        </nav>

        <div>
          <Link href={"tel:+998711234567"}>+998 (71) 123-45-67</Link>
          <div>
            <span>Uz</span>
            <ArrowDownIcon />
          </div>
        </div>
      </div>
    </HeaderTopStyle>
  );
};

export default HeaderTop;
