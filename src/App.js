import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Web3 from "web3";
import { CONTACT_ABI, CONTACT_ADDRESS } from "./config";
import * as React from "react";
import { useForm } from "react-hook-form";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import moment from "moment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// import Contacts from '../build/contracts/Contacts.json';
// ReactTestJob\react-test-job\build\contracts\Contacts.json

function App() {
  // usf
  const [account, setAccount] = useState(); // state variable to set account.
  const [depositAmout, setdepositAmout] = useState("");
  const [withdrawAmout, setwithdrawAmout] = useState("");
  const [balance, setbalance] = useState("");
  const [bill, setbill] = useState("");

  // const [contactList, setcontactList] = useState();

  const getContract = () => {
    const web3 = new Web3(Web3.givenProvider || "http:localhost:7545");
    return new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
  };

  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      // const balances = showBalance();
      // setbalance(balances[0]);

      // const contactList = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
      // setcontactList(contactList);
    }

    load();
  }, []);

  // const depo = () => {
  //   contactList.methods
  //     .Deposit(parseInt(depositAmout))
  //     .send({ from: account })
  //     .then((res) => {
  //       showBalance(res);
  //       console.log("Deposit", res);
  //       // setdepositAmout(0);
  //       setdepositAmout(" ");
  //       showBillList(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const tryDeposit = await getContract.methods.Deposit().call()
  const tryDeposit = async () => {
    console.log("TryDrposit ");
    const contract = getContract();
    await contract.methods
      .Deposit(parseInt(depositAmout))
      .send({ from: account })
      .then((res) => {
        showBalance(res);
        console.log("Deposit", res);
        // setdepositAmout(0);
        setdepositAmout(" ");
        showBillList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const tryWithdraw = async () => {
    console.log("Withdraw ");
    const contract = getContract();
    await contract.methods
      .Withdraw(parseInt(withdrawAmout))
      .send({ from: account })
      .then((res) => {
        showBalance(res);
        console.log("Withdraw", res);
        setwithdrawAmout(" ");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showBalance = async () => {
    const contract = getContract();
    await contract.methods
      .getBalance()
      .call({ from: account })
      .then((res) => {
        setbalance(res);
        console.log("Balance", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showBillList = async () => {
    const contract = getContract();
    await contract.methods
      .getBill()
      .call({ from: account })
      .then((res) => {
        setbill(res);
        console.log("ShowBill", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleDepositSubmit = (event) => {
  //   // event.preventDefault();
  //   // setdepositAmout(event.target.value);
  //   alert("Your deposit is : " + depositAmout);
  // };

  // const handleWithdrawSubmit = (event) => {
  //   // event.preventDefault();
  //   alert(`Your withdraw is : ${withdrawAmout}`);
  // };

  return (
    <div className="App-bg">
      <div className="App App-center">
        <label className="Font-size">
          𝐃𝐄𝐏𝐎𝐒𝐈𝐓 ＆ 𝐖𝐈𝐓𝐇𝐃𝐑𝐀𝐖<br></br>
        </label>
        <br></br>
        <br></br>
        <label>
          Your account is : {account}
          <br></br>
        </label>
        <br></br>
        <br></br>
        <label>
          Enter your deposit
          <br></br>
          <br></br>
          <input
            className="Input-box Margin-right-10"
            type="number"
            step="0.01"
            value={depositAmout}
            onChange={(e) => {
              // console.log(e);
              setdepositAmout(e.target.value);
            }}
          />
          {"  "}
          <Button
            className="BtnSubmit-size"
            variant="contained"
            onClick={(e) => {
              // handleDepositSubmit();
              tryDeposit();
              // depo();
            }}
          >
            Submit
          </Button>
        </label>
        <label>
          Enter your withdraw
          <br></br> <br></br>
          <input
            className="Input-box Margin-right-10"
            type="number"
            step="0.01"
            value={withdrawAmout}
            onChange={(e) => setwithdrawAmout(e.target.value)}
          />{" "}
          <Button
            className="BtnSubmit-size"
            variant="contained"
            onClick={(e) => {
              // handleWithdrawSubmit();
              tryWithdraw();
            }}
          >
            Submit
          </Button>
        </label>
        <br></br>
        <br></br>
        <label>
          Your Balance : {balance} {/*{console.log("Your Balance", balance)}*/}
        </label>
        <br></br>
        <br></br>
        <label>
          <Button
            variant="contained"
            onClick={(e) => {
              showBalance();
              showBillList();
            }}
          >
            Show Balance & History
          </Button>
        </label>
        <br></br>
        <label>
          <br></br>
          History
          <br></br>
          <br></br>
        </label>
        <TableContainer sx={{ maxHeight: 200 }} component={Paper}>
          <Table
            className="Sticky"
            stickyHeader
            sx={{ minWidth: 650 }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                {/* <StyledTableCell align="left">Number</StyledTableCell> */}
                <StyledTableCell align="center">Address</StyledTableCell>
                <StyledTableCell align="right">Deposit</StyledTableCell>
                <StyledTableCell align="right">Withdraw</StyledTableCell>
                <StyledTableCell align="right">Time</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bill
                ? bill.map((val, key) => (
                    <TableRow
                      key={key}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      {/* <StyledTableCell component="th" scope="row">
                        {key}
                      </StyledTableCell> */}
                      <StyledTableCell align="center">
                        {val.customers}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {val.amountDeposit}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {val.amountWithdraw}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {moment
                          .unix(val.timestamp)
                          .format("MMMM Do YYYY, h:mm:ss a")
                          .toString()}
                      </StyledTableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default App;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FFFFFF",
    // color: theme.palette.common.white,
  },
}));
