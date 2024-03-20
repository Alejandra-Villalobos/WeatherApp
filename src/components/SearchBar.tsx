import React from "react";
import { Input, Space } from "antd";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

type Props = {
  setLocation: (newType: string) => void;
};

function SearchBar({ setLocation }: Props) {
  const [value, setValue] = useState<string>("");

  const handleSearch = () => {
    setLocation(`${value}`);
  };

  return (
    <>
      <Space.Compact className="min:w-8/12 py-4 flex items-center w-10/12">
        <Input
          placeholder="Ingrese el nombre de una ciudad, código postal o coordenadas"
          onChange={(e) => setValue(e.target.value)}
          className="p-3"
        />
        <div onClick={() => handleSearch()} className="bg-green-500 p-3 rounded-r-md hover:bg-green-600 cursor-pointer">
          <FaSearch color="white" size={25} />
        </div>
      </Space.Compact>
    </>
  );
}

export default SearchBar;
