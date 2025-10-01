import React from "react";
import { useCreateWallet as useCreateWalletExtendedChains } from "@privy-io/react-auth/extended-chains";
import { toast } from "react-toastify";

type SupportedExtendedChains =
  | "cosmos"
  | "stellar"
  | "sui"
  | "tron"
  | "bitcoin-segwit"
  | "near"
  | "ton"
  | "starknet"
  | "spark";

const CreateAWallet = () => {
  const { createWallet } = useCreateWalletExtendedChains();

  const createWalletExtendedChainHandler = async (
    chain: SupportedExtendedChains
  ) => {
    try {
      await createWallet({
        chainType: chain,
      });
      toast.success(`${chain} wallet successfully created`);
    } catch (error) {
      console.log(error);
      toast.error(`${chain} wallet creation failed.`);
    }
  };

  const supportedChains: SupportedExtendedChains[] = ["sui"];

  const availableActions = supportedChains.map((chain) => ({
    name: `Create ${
      chain.charAt(0).toUpperCase() + chain.slice(1).replace("-", " ")
    } wallet`,
    function: () => createWalletExtendedChainHandler(chain),
  }));

  return (
    <div>
      <h2>Create a wallet</h2>
      <p>
        Creates a new wallet for the user. To limit to a single wallet per user,
        remove the createAdditional flag from createWallet
      </p>
      <ul>
        {availableActions.map((action, index) => (
          <li key={index}>
            <button onClick={action.function}>{action.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateAWallet;
