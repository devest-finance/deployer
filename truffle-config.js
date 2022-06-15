const HDWalletProvider = require('@truffle/hdwallet-provider');
module.exports = {
    compilers: {
        solc: {
            version: ">=0.6.0 <0.8.5" // A version or constraint - Ex. "^0.5.0"
            // Can be set to "native" to use a native solc or
        }
    },
    mocha: {
        enableTimeouts: false,
        before_timeout: 12000000
    },
    // Uncommenting the defaults below
    // provides for an easier quick-start with Ganache.
    // You can also follow this format for other networks.
    // See details at: https://trufflesuite.com/docs/truffle/reference/configuration
    // on how to specify configuration options!
    //
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        test: {
            host: "127.0.0.1",
            port: 6545,
            network_id: "*"
        },
        testnet: {
            provider: () => new HDWalletProvider("", `https://data-seed-prebsc-2-s3.binance.org:8545`),
            network_id: 97,
            confirmations: 10,
            timeoutBlocks: 200,
            skipDryRun: false,
            gas: 6721975,
            gasPrice: 20000000000
        },
        bsc: {
            provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://bsc-dataseed1.binance.org`),
            network_id: 56,
            confirmations: 10,
            timeoutBlocks: 200,
            skipDryRun: true
        }
    }
    //
    // Truffle DB is currently disabled by default; to enable it, change enabled:
    // false to enabled: true. The default storage location can also be
    // overridden by specifying the adapter settings, as shown in the commented code below.
    //
    // NOTE: It is not possible to migrate your contracts to truffle DB and you should
    // make a backup of your artifacts to a safe location before enabling this feature.
    //
    // After you backed up your artifacts you can utilize db by running migrate as follows:
    // $ truffle migrate --reset --compile-all
    //
    // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
    // }
};
