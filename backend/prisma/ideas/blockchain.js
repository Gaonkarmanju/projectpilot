module.exports = {
  domain: 'Blockchain',
  ideas: `
# Records and verification
Academic Certificate Verification on Blockchain | I | 7 | Colleges issue certificates whose hashes are stored on a blockchain so employers can verify them. | Solidity, Hardhat, React, IPFS | Certificate issuing; Hash storage; Public verification page; Revocation
Land Records Registry | A | 9 | A prototype land registry that records ownership transfers on a permissioned blockchain. | Hyperledger Fabric, Node.js, React | Asset model; Transfer workflow; Multi-party endorsement; History view
Medical Records Access Control | A | 9 | Patients control which doctors can access their records, with every access logged on chain. | Solidity, IPFS, React | Encrypted record storage; Access grants; Access log; Revocation
Supply Chain Traceability for Food | A | 9 | Tracks a product from farm to shop with each handover recorded. | Hyperledger Fabric, Node.js, QR codes | Participant roles; Handover events; QR trace page; Tamper evidence
Pharmaceutical Drug Authentication | I | 8 | Detects counterfeit medicines by verifying each pack's identity on a blockchain. | Solidity, React, QR codes | Batch registration; Pack serials; Scan to verify; Duplicate scan alerts
Document Timestamping Service | B | 5 | Proves a document existed at a certain time by storing its hash on chain. | Solidity, Ethers.js, React | File hashing; Timestamp transaction; Verification; Receipt download
Vehicle History Registry | I | 7 | Records ownership, servicing and accident history for vehicles. | Solidity, Hardhat, Next.js | Vehicle registration; Service records; Ownership transfer; Public history report
Organ Donation Matching Registry | A | 9 | A transparent registry for organ donors and recipients with auditable matching. | Hyperledger Fabric, Node.js | Donor and recipient records; Matching rules; Audit trail; Hospital roles
Birth and Death Certificate Registry | I | 7 | Municipal certificate issuing with tamper-proof records. | Hyperledger Fabric, React | Issuing workflow; Verification; Role permissions; Search
Intellectual Property Registration | I | 7 | Creators register designs or writing with proof of ownership and date. | Solidity, IPFS, React | Work upload; Ownership record; Licence terms; Dispute evidence
Product Warranty on Blockchain | I | 6 | Digital warranty cards that transfer with the product on resale. | Solidity, Next.js | Warranty issuing; Transfer; Expiry; Service claim
Charity Donation Tracker | I | 7 | Donors see exactly how their donations are spent by the charity. | Solidity, Hardhat, React | Donation contract; Spending records; Donor dashboard; Public audit page

# Finance and tokens
Decentralised Crowdfunding Platform | I | 7 | Campaign funds are released only when backers vote that milestones are met. | Solidity, Hardhat, React | Campaign contract; Contributions; Milestone voting; Refunds
Peer-to-peer Lending on a Testnet | A | 9 | Borrowers request loans and lenders fund them with smart contract repayment schedules. | Solidity, Hardhat, Next.js | Loan requests; Collateral handling; Repayment schedule; Default handling
Decentralised Exchange Prototype | A | 10 | An automated market maker for swapping test tokens. | Solidity, Hardhat, React | ERC-20 tokens; Liquidity pools; Constant product pricing; Swap UI
Stablecoin Mechanism Simulation | A | 9 | Simulates how collateral-backed stablecoins maintain their peg. | Python, Solidity | Collateral model; Liquidation logic; Price shock simulation; Report
Campus Token for Canteen Payments | I | 7 | A closed-loop token students use at the canteen and stores on campus. | Solidity, Flutter, Polygon testnet | Token contract; Wallet app; Merchant QR payments; Top-up admin
Loyalty Points on Blockchain | I | 6 | Shops issue loyalty points as tokens that can be used across partner stores. | Solidity, React | Token issuance; Redemption; Partner stores; Balance dashboard
Multi-signature Wallet | A | 8 | A wallet that needs approval from several owners before sending funds. | Solidity, Hardhat, React | Owner management; Transaction proposals; Confirmations; Execution
Token Vesting Contract | I | 5 | Releases tokens to team members gradually over a vesting schedule. | Solidity, Hardhat | Vesting schedule; Cliff period; Claim function; Tests
Escrow Smart Contract for Freelancers | I | 6 | Holds client payment until the freelancer's work is approved. | Solidity, Hardhat, Next.js | Escrow contract; Approval and dispute; Arbiter role; UI
Micro-insurance for Crop Failure | A | 9 | Pays farmers automatically when weather data shows drought, using an oracle. | Solidity, Chainlink, React | Policy contract; Weather oracle; Automatic payout; Farmer dashboard
Cross-border Remittance Prototype | A | 9 | Compares the cost and speed of sending money abroad with a blockchain prototype. | Solidity, Node.js | Remittance flow; Fee comparison; Exchange rates; Report
Payment Channel Demo | A | 9 | Demonstrates off-chain payments with on-chain settlement. | Solidity, Node.js | Channel opening; Signed off-chain payments; Settlement; Dispute handling

# Governance and identity
Blockchain-based E-voting | A | 9 | A voting system where votes are recorded on chain but voter identities stay private. | Solidity, Hardhat, React | Voter registration; Ballot contract; Anonymous voting; Result tally
DAO for a Student Club | I | 7 | Club members propose and vote on how to spend the club budget. | Solidity, OpenZeppelin Governor, React | Membership tokens; Proposals; Voting; Treasury execution
Self-sovereign Identity Wallet | A | 10 | Users hold verifiable credentials like degree or age proof and share only what is needed. | Hyperledger Aries, React Native | Credential issuing; Wallet; Selective disclosure; Verification
Decentralised Domain Name Service | A | 8 | Registers human-readable names that map to wallet addresses. | Solidity, Hardhat, React | Name registration; Resolution; Renewal; Transfer
Reputation System for Freelancers | I | 7 | Portable work reviews stored on chain that any platform can read. | Solidity, Next.js | Review contract; Verified jobs; Reputation score; Profile page
Transparent Government Tender System | A | 9 | Sealed bids are submitted and revealed fairly with a public audit trail. | Solidity, Hardhat, React | Commit-reveal bidding; Deadline handling; Winner selection; Audit view

# NFTs, storage and tooling
NFT Event Tickets | I | 7 | Event tickets as NFTs that prevent counterfeits and limit resale prices. | Solidity, ERC-721, Next.js | Ticket minting; Resale cap; Entry verification; Organiser dashboard
NFT Marketplace on a Testnet | A | 9 | Users mint, list and buy NFTs with royalties to creators. | Solidity, Hardhat, IPFS, Next.js | Minting; Listing and buying; Royalties; Collection pages
Decentralised File Storage App | I | 7 | Upload files to IPFS with a smart contract tracking ownership and sharing. | IPFS, Solidity, React | File upload; Content addressing; Sharing permissions; File list
Decentralised Social Media Prototype | A | 10 | Posts stored on IPFS with identities and follows on chain. | IPFS, Solidity, Next.js | Profiles; Posts; Follows; Feed
Smart Contract Vulnerability Scanner | A | 9 | Detects common vulnerabilities like reentrancy in Solidity code. | Python, Slither, Solidity | Static analysis rules; Test contracts; Reports; Fix suggestions
Blockchain Explorer for a Testnet | I | 7 | Shows blocks, transactions and addresses for a testnet. | Node.js, Ethers.js, React | Block indexing; Transaction pages; Address pages; Search
Build a Blockchain from Scratch | I | 6 | Implements a simple blockchain with proof of work, transactions and peer sync. | Python or Go | Block structure; Proof of work; Transactions; Peer-to-peer sync
Consensus Algorithm Simulator | A | 8 | Simulates proof of work, proof of stake and PBFT to compare speed and fault tolerance. | Python, SimPy | Node simulation; Consensus protocols; Fault injection; Comparison charts
Gas Fee Optimiser | I | 6 | Analyses and reduces gas costs of smart contracts. | Solidity, Hardhat Gas Reporter | Baseline measurement; Optimisation patterns; Before and after; Guide
Wallet Connect Demo dApp | B | 4 | A simple dApp that connects a browser wallet and reads and writes a smart contract. | Solidity, Ethers.js, React, MetaMask | Wallet connection; Contract read; Contract write; Network switching
On-chain Quiz with Rewards | B | 5 | Students answer quiz questions and earn test tokens for correct answers. | Solidity, React | Quiz contract; Answer submission; Token rewards; Leaderboard
Carbon Credit Trading Prototype | A | 9 | Tracks verified carbon credits and prevents double counting when traded. | Solidity, Next.js | Credit issuance; Trading; Retirement; Registry view
Energy Trading Between Neighbours | A | 9 | Households with solar panels sell surplus energy to neighbours using smart contracts. | Solidity, Node.js, IoT simulator | Meter data simulation; Order matching; Settlement; Dashboard
Agricultural Produce Auction | I | 7 | Farmers auction produce to buyers with transparent bids and payment. | Solidity, React | Auction contract; Bidding; Settlement; Farmer dashboard
Lost and Found Rewards on Chain | B | 5 | Owners post rewards for lost items, paid automatically when the finder is confirmed. | Solidity, React | Post with reward; Finder claim; Owner confirmation; Payout
Academic Paper Peer Review on Chain | A | 8 | Transparent peer review where reviews and revisions are timestamped. | Solidity, IPFS, Next.js | Paper submission; Reviewer assignment; Review records; Decision
`,
};
