import React from "react";
import { IoArrowUpCircle, IoArrowDownCircle } from "react-icons/io5";

export const Financial = React.memo(({ saldo, totalReceived, totalGastos }) => {
  const savingsPercent = totalReceived
    ? (((totalReceived - totalGastos) / totalReceived) * 100).toFixed(1)
    : 0;

  return (
    <div>
      <div className="p-3 bg-primary text-white rounded-b-3xl">
        <div className="text-center py-3">
          <h2 className="font-normal">Saldo total</h2>
          <span className="font-bold text-2xl font-mono">
            R${saldo.toFixed(2).replace(".", ",")}
          </span>
          <div className="flex justify-center gap-2 items-center mt-4">
            <div className="flex flex-col items-center gap-1 bg-white px-5 py-1 rounded-md">
              <div className="flex items-center gap-1">
                <p className="text-darkGray font-medium">Eu recebi</p>
                <IoArrowUpCircle size={25} className="text-primary" />
              </div>
              <span className="text-primary font-bold font-mono text-xl">
                R${totalReceived.toFixed(2).replace(".", ",")}
              </span>
            </div>
            {/* Linha vertical */}
            <div className="w-px h-10 bg-white opacity-30 mx-2"></div>
            <div className="bg-white px-5 py-1 flex flex-col items-center gap-1 rounded-md">
              <div className="flex items-center gap-1">
                <p className="text-darkGray font-medium">Eu gastei</p>
                <IoArrowDownCircle size={25} className="text-danger" />
              </div>
              <span className="text-darkGray font-bold font-mono text-xl">
                R${totalGastos.toFixed(2).replace(".", ",")}
              </span>
            </div>
          </div>
          {/* Linha horizontal */}
          <div className="border-t border-white opacity-20 mt-4 w-2/3 mx-auto" />
          <div className="mt-4">
            <p className="font-extralight text-xs">
              Você poupou {savingsPercent}% do que recebeu este mês
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
