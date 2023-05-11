// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract libraryProdalit {

    event Payed (address _from, uint _amount, uint _timestamp);
    event Withdrawed (address _to, uint _amount, uint _timestamp);
    event ConclusionOfTheContract(paperOfBuyAndSell _contract, uint _timestamp);
    

    struct Personality{
        address addr_wallet;
        uint ogrn;
    }

    struct paperOfBuyAndSell{
        Personality Buyer;
        Personality Seller;
        string dateOfStart;
        uint summ;
        bool statusDelivery;
        bool statusPaid;
    }

    address owner;
    mapping (address => uint) public totalPayments;
    paperOfBuyAndSell paper;
    Personality seller;

    constructor(){
        owner = msg.sender;
        seller = Personality(owner,100);
    }

    function pay() external payable {
        require(msg.value == paper.summ, "required exact summ");
        paper.statusPaid = true;
        totalPayments[msg.sender]++;
        emit Payed(msg.sender, msg.value, block.timestamp);
    }

    modifier checkStatus(){
        require(paper.statusPaid,"Not paid yet");
        require(paper.statusDelivery,"Delivery is not ended");
        _;
    }     
    
    function withdraw(address payable _to) internal checkStatus {
             _to.transfer(address(this).balance);
            emit Withdrawed(_to, address(this).balance, block.timestamp);       
    }

    function applyDelivery() public {
        paper.statusDelivery = true;
        withdraw(payable (seller.addr_wallet));
    }


    function makePaperOfBuyAndSell(uint ogrn, uint _summ, string memory date) public {
        Personality memory buyer = Personality(msg.sender,ogrn);
        paper = paperOfBuyAndSell(buyer,seller,date,_summ,false,false);
        paper.statusDelivery = false;
        emit ConclusionOfTheContract(paper, block.timestamp);
    }




}
