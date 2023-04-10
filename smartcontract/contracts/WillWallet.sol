// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract WillWallet {

    address public owner;
    uint256 private counter;

    constructor() {
        counter = 0;
        owner = msg.sender;
    }

    struct will {
        address willer;
        uint256 id;
        string willTxt;
    }

    event willCreated (
        address willer,
        uint256 id,
        string willTxt
    );

    mapping(uint256 => will) Wills;

    function addWill(
        string memory willTxt) public payable {
            require(msg.value == (1 ether), "Please submit 1 CET");
            will storage newWill = Wills[counter];
            newWill.willTxt = willTxt;
            newWill.willer = msg.sender;
            newWill.id = counter;

            emit willCreated(msg.sender, counter, willTxt);

            counter++;

            payable(owner).transfer(msg.value);
        }

        function getWill(uint256 id) public view returns(
            string memory,
            
            address
        ){
            require(id < counter, "No  such Will");
            will storage w = Wills[id];
            return(w.willTxt, w.willer);
        }
    



}
 