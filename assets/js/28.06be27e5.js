(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{292:function(e,t,a){e.exports=a.p+"assets/img/FirstStoreCreation.66285acc.png"},293:function(e,t,a){e.exports=a.p+"assets/img/BroadcastConfirm.fde15efd.png"},350:function(e,t,a){e.exports=a.p+"assets/img/CreateNewWallet.b9662283.png"},351:function(e,t,a){e.exports=a.p+"assets/img/HotWallet.3334a95d.png"},352:function(e,t,a){e.exports=a.p+"assets/img/WalletSettings.bd4e6d39.png"},353:function(e,t,a){e.exports=a.p+"assets/img/AdvancedSettings.5e47e0c3.png"},354:function(e,t,a){e.exports=a.p+"assets/img/ServerSettings.d8b5bce1.png"},355:function(e,t,a){e.exports=a.p+"assets/img/WalletSend.b3bed5a9.png"},356:function(e,t,a){e.exports=a.p+"assets/img/SignTransaction.ddb5258c.png"},702:function(e,t,a){"use strict";a.r(t);var r=a(10),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"create-a-new-wallet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-wallet"}},[e._v("#")]),e._v(" Create a new wallet")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#hot-wallet"}},[e._v("Hot Wallet")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#watch-only-wallet"}},[e._v("Watch-only wallet")])])]),e._v(" "),t("h3",{attrs:{id:"hot-wallet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hot-wallet"}},[e._v("#")]),e._v(" Hot Wallet")]),e._v(" "),t("p",[e._v("If you do not have an existing wallet, you can generate a new one within your BTCPay Server. Whether you have an existing wallet or not, the quickest way to get a wallet connected to your store is to create a new wallet. You can always replace it with an alternative wallet after receiving a few small payments to your server, if you just want to get your store ready quickly.")]),e._v(" "),t("p",[e._v("This type of wallet is also necessary to use features such as "),t("RouterLink",{attrs:{to:"/Payjoin/"}},[e._v("Payjoin")]),e._v(" and "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/issues/1282",target:"_blank",rel:"noopener noreferrer"}},[e._v("Liquid"),t("OutboundLink")],1),e._v(".")],1),e._v(" "),t("p",[e._v("After creating a store, you'll be able to attach a wallet by first navigating to the sidebar or slide-out menu and clicking/tapping the "),t("strong",[e._v("Bitcoin")]),e._v(" button under the "),t("strong",[e._v("Wallets")]),e._v(" header. Alternatively, you can find the option to "),t("strong",[e._v("Set up a wallet")]),e._v(" on the Dashboard.")]),e._v(" "),t("figure",[t("img",{attrs:{src:a(292),alt:"Main Menu",title:"Main Menu"}})]),e._v(" "),t("p",[e._v("You'll focus on the "),t("strong",[e._v("I don't have a wallet")]),e._v(" section for a hot wallet and click the "),t("strong",[e._v("Create a new wallet")]),e._v(" button.")]),e._v(" "),t("figure",[t("img",{attrs:{src:a(350),alt:"New Wallet",title:"New Wallet"}})]),e._v(" "),t("p",[e._v("There will be two options on the proceeding page, and in this case, we'll select the "),t("strong",[e._v("Hot wallet")]),e._v(" button.")]),e._v(" "),t("figure",[t("img",{attrs:{src:a(351),alt:"Create Wallet",title:"Create Wallet"}})]),e._v(" "),t("p",[e._v("For most people, the default options, including "),t("strong",[e._v("Address Type")]),e._v(" (Segwit), should work well for most applications, and it's recommended not to change it unless you're sure of what you're doing. The "),t("strong",[e._v("Payjoin")]),e._v(" feature is optional, and you can learn more about it at the link "),t("a",{attrs:{href:"#hot-wallet"}},[e._v("above")]),e._v(".")]),e._v(" "),t("figure",[t("img",{attrs:{src:a(352),alt:"Wallet Settings",title:"Wallet Settings"}})]),e._v(" "),t("h4",{attrs:{id:"advanced-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#advanced-settings"}},[e._v("#")]),e._v(" Advanced Settings")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Optional "),t("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki#from-mnemonic-to-seed",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP39"),t("OutboundLink")],1),e._v(" passphrase")]),e._v(" "),t("ul",[t("li",[e._v("You can add a passphrase for your hot wallet's mnemonic for an additional layer of security.")])])]),e._v(" "),t("li",[t("p",[e._v("Import keys to RPC")]),e._v(" "),t("ul",[t("li",[e._v("This is for more advanced applications of BTCPay Server. Importing your keys to RPC will allow users to leverage "),t("a",{attrs:{href:"https://developer.bitcoin.org/reference/rpc/index.html#wallet-rpcs",target:"_blank",rel:"noopener noreferrer"}},[e._v("bitcoind Wallet RPCs"),t("OutboundLink")],1),e._v(" on the imported wallet.")])])])]),e._v(" "),t("figure",[t("img",{attrs:{src:a(353),alt:"Advanced Settings",title:"Advanced Settings"}})]),e._v(" "),t("h4",{attrs:{id:"recovery-seed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recovery-seed"}},[e._v("#")]),e._v(" Recovery Seed")]),e._v(" "),t("p",[e._v("The final step in creating a hot wallet is to document your recovery seed. It's crucial to understand that anyone with access to your recovery seed can access and steal all your funds, both current and future, because a private key is derived from the recovery seed. Securely back up your seed by writing it down and keep it in a safe place. Do not photograph it or store it in a digital format. Do not rely solely on your server for storing your recovery seed, always keep a backup copy.")]),e._v(" "),t("p",[e._v("After you've done so, tick the checkbox that says "),t("em",[e._v("I have written down my recovery phrase and stored it in a secure location")]),e._v(" and click the "),t("strong",[e._v("Done")]),e._v(" button.")]),e._v(" "),t("h4",{attrs:{id:"requirements-to-create-wallets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements-to-create-wallets"}},[e._v("#")]),e._v(" Requirements to create wallets")]),e._v(" "),t("p",[e._v("If are using a "),t("RouterLink",{attrs:{to:"/Deployment/ThirdPartyHosting/"}},[e._v("third-party host")]),e._v(", this option must be explicitly enabled by the server admin. Generating a new wallet in an environment you are not sure is trustworthy, is discouraged.")],1),e._v(" "),t("p",[e._v('By default, only server admins can use the create wallet feature. This is because server admins are able to extract the private key easily. However, if you want other trusted individuals to create and manage their stores, you can enable the hot wallet feature for non-admins. To do this, go to Server Settings > Policies > "Allow non-admins to create hot wallets for their stores".')]),e._v(" "),t("figure",[t("img",{attrs:{src:a(354),alt:"BTCPay Server settings",title:"BTCPay Server settings"}})]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("When a new wallet is generated, BTCPay Server will show you a twelve word recovery seed. After the initial display, the recovery seed is wiped from the server, unless a the hot wallet option is enabled.")])]),e._v(" "),t("h4",{attrs:{id:"spending-funds-with-btcpay-hot-wallet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spending-funds-with-btcpay-hot-wallet"}},[e._v("#")]),e._v(" Spending funds with BTCPay Hot Wallet")]),e._v(" "),t("p",[e._v("Once you've received funds to your wallet and decide to spend them, you can automatically sign the transaction inside BTCPay Server.")]),e._v(" "),t("ol",[t("li",[e._v("In BTCPay Server, go to > Wallets > Bitcoin > Send")]),e._v(" "),t("li",[e._v("Fill in the Destination address and the Amount")]),e._v(" "),t("li",[e._v("Adjust the transaction settings, including fee rate, confirmation time preference, and if you'd like transaction fees to be subtracted from the amount you're sending")]),e._v(" "),t("li",[e._v("Sign the transaction")]),e._v(" "),t("li",[e._v("Review the transaction")]),e._v(" "),t("li",[e._v("Broadcast the transaction")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(355),alt:"BTCPay Server Send page",title:"BTCPay Server Send page"}}),e._v(" "),t("img",{attrs:{src:a(293),alt:"BTCPay Server Transaction Review and Broadcast page",title:"BTCPay Server Transaction Review and Broadcast page"}})]),e._v(" "),t("h4",{attrs:{id:"security-implications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-implications"}},[e._v("#")]),e._v(" Security Implications")]),e._v(" "),t("p",[e._v("Storing private keys on a public server comes with risks. This is similar to the risks of running and using the "),t("RouterLink",{attrs:{to:"/LightningNetwork/"}},[e._v("Lightning Network")]),e._v(" (except that you can recover funds with a backup).\n"),t("strong",[e._v("Please, ALWAYS be sure to back up any seed that is generated by this feature and to never leave money you cannot afford to lose spendable by those private keys")]),e._v(".")],1),e._v(" "),t("h4",{attrs:{id:"reducing-risk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reducing-risk"}},[e._v("#")]),e._v(" Reducing risk")]),e._v(" "),t("p",[e._v("As mentioned above, the create wallet functionality includes the risk of funds being stolen if the server or account is compromised. To mitigate this risk, we advise you to:")]),e._v(" "),t("ul",[t("li",[e._v("Enable two factor or U2F authentication")]),e._v(" "),t("li",[e._v("Occasionally move funds to your cold storage either manually or by configuring "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcTransmuter/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTC Transmuter"),t("OutboundLink")],1),e._v(" with automatic payment forwarding.")])]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("DANGER")]),e._v(" "),t("p",[e._v("Do not give anyone else access to your server's SSH keys or server account credentials when using a hot wallet. Anyone with access to your account can spend the funds from your hot wallet. If you need to allow account access to employees, developers, etc. use an "),t("RouterLink",{attrs:{to:"/ConnectWallet/#connect-an-existing-wallet"}},[e._v("existing wallet")]),e._v(" instead.")],1)]),e._v(" "),t("h3",{attrs:{id:"watch-only-wallet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#watch-only-wallet"}},[e._v("#")]),e._v(" Watch-only wallet")]),e._v(" "),t("p",[e._v('Like the hot wallet, the watch-only wallet can instantly get your store connected to a wallet. In contrast, this option does not store the private keys on the server. As a result, the wallet becomes "watch-only" for any received funds.')]),e._v(" "),t("p",[e._v("There are several routes you can take to spend funds with this type of wallet including importing the seed words into a hardware wallet to sign your transactions using the "),t("RouterLink",{attrs:{to:"/Vault/"}},[e._v("BTCPay Server Vault application")]),e._v(", "),t("RouterLink",{attrs:{to:"/Wallet/#psbt"}},[e._v("PSBT")]),e._v(", or the least recommended manually providing your seed words every time.")],1),e._v(" "),t("figure",[t("img",{attrs:{src:a(356),alt:"BTCPay Server Transaction Signing Options",title:"BTCPay Server Transaction Signing Options"}})]),e._v(" "),t("p",[e._v("Alternatively, you can spend funds in another external wallet where you have imported your BTCPay Server-produced seed words. If you import your seed words into an external wallet, you can also use a PSBT to spend the funds, assuming the wallet supports it. This option will be available on the wallet's send page. Be sure to consider the "),t("RouterLink",{attrs:{to:"/FAQ/Wallet/#missing-payments-in-my-software-or-hardware-wallet"}},[e._v("gap limit issue")]),e._v(" if you're using an external wallet with your watch-only wallet.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);