// export const CONTACT_ADDRESS = "0x5868527892894972054182d086415a27FA7E40cF";
export const CONTACT_ADDRESS = "0x2Cd486Baac7DAb733B503254A990D564D9eBD425";

export const CONTACT_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bills",
    outputs: [
      {
        internalType: "address",
        name: "customers",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountDeposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountWithdraw",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "customers",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountDeposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountWithdraw",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "createBill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBill",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "customers",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountDeposit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountWithdraw",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct Contracts.Bill[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
];
