const METH = {
    STATE_GET_STORAGE: 'state_getStorage',
}

const CMN_KEYS = [
    {
      "name": ":changes_trie",
      "key": "0x3a6368616e6765735f74726965"
    },
    {
      "name": ":child_storage:",
      "key": "0x3a6368696c645f73746f726167653a"
    },
    {
      "name": ":child_storage:default:",
      "key": "0x3a6368696c645f73746f726167653a64656661756c743a"
    },
    {
      "name": ":code",
      "key": "0x3a636f6465"
    },
    {
      "name": ":extrinsic_index",
      "key": "0x3a65787472696e7369635f696e646578"
    },
    {
      "name": ":heappages",
      "key": "0x3a686561707061676573"
    },
    {
      "name": "ACTIVE_CONFIG",
      "key": "0x06de3d8a54d27e44a9d5ce189618f22db4b49d95320d9021994c850f25b8e385"
    },
    {
      "name": "assets account",
      "key": "0x682a59d51ab9e48a8c8cc418ff9708d2b99d880ec681799c0cf30e8886371da9"
    },
    {
      "name": "assets approvals",
      "key": "0x682a59d51ab9e48a8c8cc418ff9708d23c9c1284130706f5aea0c8b3d4c54d89"
    },
    {
      "name": "assets asset",
      "key": "0x682a59d51ab9e48a8c8cc418ff9708d2d34371a193a751eea5883e9553457b2e"
    },
    {
      "name": "assets metadata",
      "key": "0x682a59d51ab9e48a8c8cc418ff9708d2b5f3822e35ca2f31ce3526eab1363fd2"
    },
    {
      "name": "assets palletVersion",
      "key": "0x682a59d51ab9e48a8c8cc418ff9708d24e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "assignedSlots activeTemporarySlotCount",
      "key": "0x6cf4040bbce30824850f1a4823d8c65faeefaa25a5bae16a431719647c1d99da"
    },
    {
      "name": "assignedSlots palletVersion",
      "key": "0x6cf4040bbce30824850f1a4823d8c65f4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "assignedSlots permanentSlotCount",
      "key": "0x6cf4040bbce30824850f1a4823d8c65f5c2537a826f40bfabfd1ca407e83c25d"
    },
    {
      "name": "assignedSlots permanentSlots",
      "key": "0x6cf4040bbce30824850f1a4823d8c65f9b648f581efea4958035e1abe3fa9d6a"
    },
    {
      "name": "assignedSlots temporarySlotCount",
      "key": "0x6cf4040bbce30824850f1a4823d8c65ff536928ca5ba50039bc2766a48ddbbab"
    },
    {
      "name": "assignedSlots temporarySlots",
      "key": "0x6cf4040bbce30824850f1a4823d8c65f169e7c43e507f5caf093224fc23a5dab"
    },
    {
      "name": "auctions auctionCounter",
      "key": "0xca32a41f4b3ed515863dc0a38697f84ea532c79766d5a981efeca4da298f4e4f"
    },
    {
      "name": "auctions auctionInfo",
      "key": "0xca32a41f4b3ed515863dc0a38697f84eef0d899c73ce7f3705166b3e3e6512eb"
    },
    {
      "name": "auctions palletVersion",
      "key": "0xca32a41f4b3ed515863dc0a38697f84e4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "auctions reservedAmounts",
      "key": "0xca32a41f4b3ed515863dc0a38697f84e49ddb7db82ffb65f362833fd1102d66d"
    },
    {
      "name": "auctions winning",
      "key": "0xca32a41f4b3ed515863dc0a38697f84e4a20667fb1dc58cb22bcadfd9ab7f67c"
    },
    {
      "name": "aura authorities",
      "key": "0x57f8dc2f5ab09467896f47300f0424385e0621c4869aa60c02be9adcc98a0d1d"
    },
    {
      "name": "aura currentSlot",
      "key": "0x57f8dc2f5ab09467896f47300f04243806155b3cd9a8c9e5e9a23fd5dc13a5ed"
    },
    {
      "name": "aura palletVersion",
      "key": "0x57f8dc2f5ab09467896f47300f0424384e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "auraExt authorities",
      "key": "0x3c311d57d4daf52904616cf69648081e5e0621c4869aa60c02be9adcc98a0d1d"
    },
    {
      "name": "auraExt palletVersion",
      "key": "0x3c311d57d4daf52904616cf69648081e4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "authorityDiscovery keys",
      "key": "0x2099d7f109d6e535fb000bba623fd4409f99a2ce711f3a31b2fc05604c93f179"
    },
    {
      "name": "authorityDiscovery nextKeys",
      "key": "0x2099d7f109d6e535fb000bba623fd4404c014e6bf8b8c2c011e7290b85696bb3"
    },
    {
      "name": "authorityDiscovery palletVersion",
      "key": "0x2099d7f109d6e535fb000bba623fd4404e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "authorship author",
      "key": "0xd57bce545fb382c34570e5dfbf338f5e326d21bc67a4b34023d577585d72bfd7"
    },
    {
      "name": "authorship didSetUncles",
      "key": "0xd57bce545fb382c34570e5dfbf338f5ebddf84c5eb23e6f53af725880d8ffe90"
    },
    {
      "name": "authorship palletVersion",
      "key": "0xd57bce545fb382c34570e5dfbf338f5e4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "authorship uncles",
      "key": "0xd57bce545fb382c34570e5dfbf338f5ea36180b5cfb9f6541f8849df92a6ec93"
    },
    {
      "name": "babe authorities",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087f5e0621c4869aa60c02be9adcc98a0d1d"
    },
    {
      "name": "babe authorVrfRandomness",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087fd077dfdb8adb10f78f10a5df8742c545"
    },
    {
      "name": "babe currentSlot",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087f06155b3cd9a8c9e5e9a23fd5dc13a5ed"
    },
    {
      "name": "babe epochConfig",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087fdc6b171b77304263c292cc3ea5ed31ef"
    },
    {
      "name": "babe epochIndex",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087f38316cbf8fa0da822a20ac1c55bf1be3"
    },
    {
      "name": "babe epochStart",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087fe90e2fbf2d792cb324bffa9427fe1f0e"
    },
    {
      "name": "babe genesisSlot",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087f678711d15ebbceba5cd0cea158e6675a"
    },
    {
      "name": "babe initialized",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087ffa92de910a7ce2bd58e99729c69727c1"
    },
    {
      "name": "babe lateness",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087f0323475657e0890fbdbf66fb24b4649e"
    },
    {
      "name": "babe nextAuthorities",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087faacf00b9b41fda7a9268821c2a2b3e4c"
    },
    {
      "name": "babe nextEpochConfig",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087f9aab0a5b63b359512deee557c9f4cf63"
    },
    {
      "name": "babe nextRandomness",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087f7ce678799d3eff024253b90e84927cc6"
    },
    {
      "name": "babe palletVersion",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087f4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "babe pendingEpochConfigChange",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087f8b4328e343c3e0ac90f83da4860cbe36"
    },
    {
      "name": "babe randomness",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087f7a414cb008e0e61e46722aa60abdd672"
    },
    {
      "name": "babe segmentIndex",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087f66e8f035c8adbe7f1547b43c51e6f8a4"
    },
    {
      "name": "babe underConstruction",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087fb9093659d7a856809757134d2bc86e62"
    },
    {
      "name": "bagsList counterForListNodes",
      "key": "0xdf66cf37cde77d2a63889732a23c685e7a6dc62e324093ba1331bf49fdb2f24a"
    },
    {
      "name": "bagsList listBags",
      "key": "0xdf66cf37cde77d2a63889732a23c685ee5c03730c8f59f00941607850b6633d8"
    },
    {
      "name": "bagsList listNodes",
      "key": "0xdf66cf37cde77d2a63889732a23c685e62556a85fcb7c61b2c6c750924846b15"
    },
    {
      "name": "bagsList palletVersion",
      "key": "0xdf66cf37cde77d2a63889732a23c685e4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "balances account",
      "key": "0xc2261276cc9d1f8598ea4b6a74b15c2fb99d880ec681799c0cf30e8886371da9"
    },
    {
      "name": "balances locks",
      "key": "0xc2261276cc9d1f8598ea4b6a74b15c2f218f26c73add634897550b4003b26bc6"
    },
    {
      "name": "balances palletVersion",
      "key": "0xc2261276cc9d1f8598ea4b6a74b15c2f4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "balances reserves",
      "key": "0xc2261276cc9d1f8598ea4b6a74b15c2f60c9ab7384f36f3de79a685fa22b4491"
    },
    {
      "name": "balances storageVersion",
      "key": "0xc2261276cc9d1f8598ea4b6a74b15c2f308ce9615de0775a82f8a94dc3d285a1"
    },
    {
      "name": "balances totalIssuance",
      "key": "0xc2261276cc9d1f8598ea4b6a74b15c2f57c875e4cff74148e4628f264b974c80"
    },
    {
      "name": "beefy authorities",
      "key": "0x08c41974a97dbf15cfbec28365bea2da5e0621c4869aa60c02be9adcc98a0d1d"
    },
    {
      "name": "beefy nextAuthorities",
      "key": "0x08c41974a97dbf15cfbec28365bea2daaacf00b9b41fda7a9268821c2a2b3e4c"
    },
    {
      "name": "beefy palletVersion",
      "key": "0x08c41974a97dbf15cfbec28365bea2da4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "beefy validatorSetId",
      "key": "0x08c41974a97dbf15cfbec28365bea2da8f05bccc2f70ec66a32999c5761156be"
    },
    {
      "name": "bounties bounties",
      "key": "0xa37f719efab16103103a0c8c2c784ce1a37f719efab16103103a0c8c2c784ce1"
    },
    {
      "name": "bounties bountyApprovals",
      "key": "0xa37f719efab16103103a0c8c2c784ce1b6ab99f216a29c9185ba4dd55520988c"
    },
    {
      "name": "bounties bountyCount",
      "key": "0xa37f719efab16103103a0c8c2c784ce1e37921d32604f381943d4150ed81c7eb"
    },
    {
      "name": "bounties bountyDescriptions",
      "key": "0xa37f719efab16103103a0c8c2c784ce195d2bceca300e93cdbc0c129bfc55ef9"
    },
    {
      "name": "bounties palletVersion",
      "key": "0xa37f719efab16103103a0c8c2c784ce14e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "bridgeRococoGrandpa bestFinalized",
      "key": "0x9ba1b78972885c5d3fc221d6771e8ba2a4ebafdd473c549fdb24c5c991c5591c"
    },
    {
      "name": "bridgeRococoGrandpa currentAuthoritySet",
      "key": "0x9ba1b78972885c5d3fc221d6771e8ba224a7b8b5717ea33346fa595a66ccbcb0"
    },
    {
      "name": "bridgeRococoGrandpa importedHashes",
      "key": "0x9ba1b78972885c5d3fc221d6771e8ba20143a06adf1bce22251cdae632c26899"
    },
    {
      "name": "bridgeRococoGrandpa importedHashesPointer",
      "key": "0x9ba1b78972885c5d3fc221d6771e8ba2799684227dccd4609843470b46c2a4b4"
    },
    {
      "name": "bridgeRococoGrandpa importedHeaders",
      "key": "0x9ba1b78972885c5d3fc221d6771e8ba2f7e5937ed7be0ea26416b155b0109b48"
    },
    {
      "name": "bridgeRococoGrandpa initialHash",
      "key": "0x9ba1b78972885c5d3fc221d6771e8ba2ccab258509f2075fdbc5ad77225c3915"
    },
    {
      "name": "bridgeRococoGrandpa isHalted",
      "key": "0x9ba1b78972885c5d3fc221d6771e8ba29611a984bbd04e2fd39f97bbc006115f"
    },
    {
      "name": "bridgeRococoGrandpa palletOwner",
      "key": "0x9ba1b78972885c5d3fc221d6771e8ba2fe6d4a58cccf03d052c50ccbfa0311c7"
    },
    {
      "name": "bridgeRococoGrandpa palletVersion",
      "key": "0x9ba1b78972885c5d3fc221d6771e8ba24e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "bridgeRococoGrandpa requestCount",
      "key": "0x9ba1b78972885c5d3fc221d6771e8ba28259c5bf83601e7c551b86a2faabef9f"
    },
    {
      "name": "bridgeRococoMessages inboundLanes",
      "key": "0x2b46c0ae62c8114b3eda55630f11ff3ae5f83cf83f2127eb47afdc35d6e43fab"
    },
    {
      "name": "bridgeRococoMessages outboundLanes",
      "key": "0x2b46c0ae62c8114b3eda55630f11ff3a96c246acb9b55077390e3ca723a0ca1f"
    },
    {
      "name": "bridgeRococoMessages outboundMessages",
      "key": "0x2b46c0ae62c8114b3eda55630f11ff3a8a395e6242c6813b196ca31ed0547ea7"
    },
    {
      "name": "bridgeRococoMessages palletOperatingMode",
      "key": "0x2b46c0ae62c8114b3eda55630f11ff3a0f4cf0917788d791142ff6c1f216e7b3"
    },
    {
      "name": "bridgeRococoMessages palletOwner",
      "key": "0x2b46c0ae62c8114b3eda55630f11ff3afe6d4a58cccf03d052c50ccbfa0311c7"
    },
    {
      "name": "bridgeRococoMessages palletVersion",
      "key": "0x2b46c0ae62c8114b3eda55630f11ff3a4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "bridgeWococoGrandpa bestFinalized",
      "key": "0xe81713b6b40972bbcd298d67597a495fa4ebafdd473c549fdb24c5c991c5591c"
    },
    {
      "name": "bridgeWococoGrandpa currentAuthoritySet",
      "key": "0xe81713b6b40972bbcd298d67597a495f24a7b8b5717ea33346fa595a66ccbcb0"
    },
    {
      "name": "bridgeWococoGrandpa importedHashes",
      "key": "0xe81713b6b40972bbcd298d67597a495f0143a06adf1bce22251cdae632c26899"
    },
    {
      "name": "bridgeWococoGrandpa importedHashesPointer",
      "key": "0xe81713b6b40972bbcd298d67597a495f799684227dccd4609843470b46c2a4b4"
    },
    {
      "name": "bridgeWococoGrandpa importedHeaders",
      "key": "0xe81713b6b40972bbcd298d67597a495ff7e5937ed7be0ea26416b155b0109b48"
    },
    {
      "name": "bridgeWococoGrandpa initialHash",
      "key": "0xe81713b6b40972bbcd298d67597a495fccab258509f2075fdbc5ad77225c3915"
    },
    {
      "name": "bridgeWococoGrandpa isHalted",
      "key": "0xe81713b6b40972bbcd298d67597a495f9611a984bbd04e2fd39f97bbc006115f"
    },
    {
      "name": "bridgeWococoGrandpa palletOwner",
      "key": "0xe81713b6b40972bbcd298d67597a495ffe6d4a58cccf03d052c50ccbfa0311c7"
    },
    {
      "name": "bridgeWococoGrandpa palletVersion",
      "key": "0xe81713b6b40972bbcd298d67597a495f4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "bridgeWococoGrandpa requestCount",
      "key": "0xe81713b6b40972bbcd298d67597a495f8259c5bf83601e7c551b86a2faabef9f"
    },
    {
      "name": "bridgeWococoMessages inboundLanes",
      "key": "0x38653611363acac183fe5c86aa85f77be5f83cf83f2127eb47afdc35d6e43fab"
    },
    {
      "name": "bridgeWococoMessages outboundLanes",
      "key": "0x38653611363acac183fe5c86aa85f77b96c246acb9b55077390e3ca723a0ca1f"
    },
    {
      "name": "bridgeWococoMessages outboundMessages",
      "key": "0x38653611363acac183fe5c86aa85f77b8a395e6242c6813b196ca31ed0547ea7"
    },
    {
      "name": "bridgeWococoMessages palletOperatingMode",
      "key": "0x38653611363acac183fe5c86aa85f77b0f4cf0917788d791142ff6c1f216e7b3"
    },
    {
      "name": "bridgeWococoMessages palletOwner",
      "key": "0x38653611363acac183fe5c86aa85f77bfe6d4a58cccf03d052c50ccbfa0311c7"
    },
    {
      "name": "bridgeWococoMessages palletVersion",
      "key": "0x38653611363acac183fe5c86aa85f77b4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "childBounties childBounties",
      "key": "0xedfb05b766f199ce00df85317e33050eedfb05b766f199ce00df85317e33050e"
    },
    {
      "name": "childBounties childBountyCount",
      "key": "0xedfb05b766f199ce00df85317e33050ec8cf10af04e2681e7cd9d58269e4fa2c"
    },
    {
      "name": "childBounties childBountyDescriptions",
      "key": "0xedfb05b766f199ce00df85317e33050e2a7810000fbde38aa2e5f696b8baf2c1"
    },
    {
      "name": "childBounties childrenCuratorFees",
      "key": "0xedfb05b766f199ce00df85317e33050ec521cef91360683d10f85bbf7ed357f3"
    },
    {
      "name": "childBounties palletVersion",
      "key": "0xedfb05b766f199ce00df85317e33050e4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "childBounties parentChildBounties",
      "key": "0xedfb05b766f199ce00df85317e33050ed017192fdfcd5137642a00a8a56117a2"
    },
    {
      "name": "claims claims",
      "key": "0x9c5d795d0297be56027a4b2464e333979c5d795d0297be56027a4b2464e33397"
    },
    {
      "name": "claims palletVersion",
      "key": "0x9c5d795d0297be56027a4b2464e333974e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "claims preclaims",
      "key": "0x9c5d795d0297be56027a4b2464e3339763e6d3c1fb15805edfd024172ea4817d"
    },
    {
      "name": "claims signing",
      "key": "0x9c5d795d0297be56027a4b2464e33397c0793c53db77bf57f00ed54aa9119289"
    },
    {
      "name": "claims total",
      "key": "0x9c5d795d0297be56027a4b2464e33397f43d6436dec51f09c3b71287a8fc9d48"
    },
    {
      "name": "claims vesting",
      "key": "0x9c5d795d0297be56027a4b2464e333975f27b51b5ec208ee9cb25b55d8728243"
    },
    {
      "name": "collatorSelection candidacyBond",
      "key": "0x15464cac3378d46f113cd5b7a4d71c84579f5a43435b04a98d64da0cefe18505"
    },
    {
      "name": "collatorSelection candidates",
      "key": "0x15464cac3378d46f113cd5b7a4d71c84948ece45793d7f15c9c0b9574ddbc665"
    },
    {
      "name": "collatorSelection desiredCandidates",
      "key": "0x15464cac3378d46f113cd5b7a4d71c84476f594316a7dfe49c1f352d95abdaf1"
    },
    {
      "name": "collatorSelection invulnerables",
      "key": "0x15464cac3378d46f113cd5b7a4d71c845579297f4dfb9609e7e4c2ebab9ce40a"
    },
    {
      "name": "collatorSelection lastAuthoredBlock",
      "key": "0x15464cac3378d46f113cd5b7a4d71c84fb8ec9656ba16ac6223a82470e54837f"
    },
    {
      "name": "collatorSelection palletVersion",
      "key": "0x15464cac3378d46f113cd5b7a4d71c844e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "collective members",
      "key": "0xf9922c78cfa3c316d27a3eb48145ab1bba7fb8745735dc3be2a2c61a72c39e78"
    },
    {
      "name": "collective palletVersion",
      "key": "0xf9922c78cfa3c316d27a3eb48145ab1b4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "collective prime",
      "key": "0xf9922c78cfa3c316d27a3eb48145ab1bcb3136ee16886ac28a54f39e605b387a"
    },
    {
      "name": "collective proposalCount",
      "key": "0xf9922c78cfa3c316d27a3eb48145ab1b6254e9d55588784fa2a62b726696e2b1"
    },
    {
      "name": "collective proposalOf",
      "key": "0xf9922c78cfa3c316d27a3eb48145ab1be9d6db8868a37d79930bc3f7f33950d1"
    },
    {
      "name": "collective proposals",
      "key": "0xf9922c78cfa3c316d27a3eb48145ab1b88c2f7188c6fdd1dffae2fa0d171f440"
    },
    {
      "name": "collective voting",
      "key": "0xf9922c78cfa3c316d27a3eb48145ab1b71cd3068e6118bfb392b798317f63a89"
    },
    {
      "name": "configuration activeConfig",
      "key": "0x06de3d8a54d27e44a9d5ce189618f22db4b49d95320d9021994c850f25b8e385"
    },
    {
      "name": "configuration bypassConsistencyCheck",
      "key": "0x06de3d8a54d27e44a9d5ce189618f22dd7632edda90c5796d6ceb85a136cdbd0"
    },
    {
      "name": "configuration palletVersion",
      "key": "0x06de3d8a54d27e44a9d5ce189618f22d4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "configuration pendingConfigs",
      "key": "0x06de3d8a54d27e44a9d5ce189618f22d53b4123b2e186e07fb7bad5dda5f55c0"
    },
    {
      "name": "council members",
      "key": "0xaebd463ed9925c488c112434d61debc0ba7fb8745735dc3be2a2c61a72c39e78"
    },
    {
      "name": "council palletVersion",
      "key": "0xaebd463ed9925c488c112434d61debc04e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "council prime",
      "key": "0xaebd463ed9925c488c112434d61debc0cb3136ee16886ac28a54f39e605b387a"
    },
    {
      "name": "council proposalCount",
      "key": "0xaebd463ed9925c488c112434d61debc06254e9d55588784fa2a62b726696e2b1"
    },
    {
      "name": "council proposalOf",
      "key": "0xaebd463ed9925c488c112434d61debc0e9d6db8868a37d79930bc3f7f33950d1"
    },
    {
      "name": "council proposals",
      "key": "0xaebd463ed9925c488c112434d61debc088c2f7188c6fdd1dffae2fa0d171f440"
    },
    {
      "name": "council voting",
      "key": "0xaebd463ed9925c488c112434d61debc071cd3068e6118bfb392b798317f63a89"
    },
    {
      "name": "crowdloan endingsCount",
      "key": "0x3d9cad2baf702e20b136f4c8900cd802ea5a0144a6145a17b84f9627a5e8110f"
    },
    {
      "name": "crowdloan funds",
      "key": "0x3d9cad2baf702e20b136f4c8900cd802b6f9671a19ef28ecb1e331fea3029098"
    },
    {
      "name": "crowdloan newRaise",
      "key": "0x3d9cad2baf702e20b136f4c8900cd802562840cfa6af3f9859e6c2d3fb8aea01"
    },
    {
      "name": "crowdloan nextFundIndex",
      "key": "0x3d9cad2baf702e20b136f4c8900cd802e71203cd811780f0b83ca4a1d8b66ff0"
    },
    {
      "name": "crowdloan palletVersion",
      "key": "0x3d9cad2baf702e20b136f4c8900cd8024e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "CURRENT_SLOT",
      "key": "0x1cb6f36e027abb2091cfb5110ab5087f06155b3cd9a8c9e5e9a23fd5dc13a5ed"
    },
    {
      "name": "democracy blacklist",
      "key": "0xf2794c22e353e9a839f12faab03a911bb7612c99e31defd01cd5a28e9967e208"
    },
    {
      "name": "democracy cancellations",
      "key": "0xf2794c22e353e9a839f12faab03a911be6e976fedc31c7b8cf73483554bd2be2"
    },
    {
      "name": "democracy depositOf",
      "key": "0xf2794c22e353e9a839f12faab03a911b255521173d2e7e678ffbf1e6bb8a6257"
    },
    {
      "name": "democracy lastTabledWasExternal",
      "key": "0xf2794c22e353e9a839f12faab03a911bfe9f3e7f80c2c73ce03922baf72a23fd"
    },
    {
      "name": "democracy lowestUnbaked",
      "key": "0xf2794c22e353e9a839f12faab03a911be2f6cb0456905c189bcb0458f9440f13"
    },
    {
      "name": "democracy nextExternal",
      "key": "0xf2794c22e353e9a839f12faab03a911b0ef76b8bae2d5abecdf27038f43d62d9"
    },
    {
      "name": "democracy palletVersion",
      "key": "0xf2794c22e353e9a839f12faab03a911b4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "democracy preimages",
      "key": "0xf2794c22e353e9a839f12faab03a911bf68967d635641a7087e53f2bff1ecad3"
    },
    {
      "name": "democracy publicPropCount",
      "key": "0xf2794c22e353e9a839f12faab03a911bbdcb0c5143a8617ed38ae3810dd45bc6"
    },
    {
      "name": "democracy publicProps",
      "key": "0xf2794c22e353e9a839f12faab03a911b49d40ca9ee2e46158745d0ab5442ac80"
    },
    {
      "name": "democracy referendumCount",
      "key": "0xf2794c22e353e9a839f12faab03a911b7f17cdfbfa73331856cca0acddd7842e"
    },
    {
      "name": "democracy referendumInfoOf",
      "key": "0xf2794c22e353e9a839f12faab03a911bb9e0c7dac4238b700a83735192cb921c"
    },
    {
      "name": "democracy storageVersion",
      "key": "0xf2794c22e353e9a839f12faab03a911b308ce9615de0775a82f8a94dc3d285a1"
    },
    {
      "name": "democracy votingOf",
      "key": "0xf2794c22e353e9a839f12faab03a911be470c6afbbbc027eb288ade7595953c2"
    },
    {
      "name": "dmp downwardMessageQueueHeads",
      "key": "0x63f78c98723ddc9073523ef3beefda0c4d7fefc408aac59dbfe80a72ac8e3ce5"
    },
    {
      "name": "dmp downwardMessageQueues",
      "key": "0x63f78c98723ddc9073523ef3beefda0ca95dac46c07a40d91506e7637ec4ba57"
    },
    {
      "name": "dmp palletVersion",
      "key": "0x63f78c98723ddc9073523ef3beefda0c4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "dmpQueue configuration",
      "key": "0xcd5c1f6df63bc97f4a8ce37f14a50ca706de3d8a54d27e44a9d5ce189618f22d"
    },
    {
      "name": "dmpQueue overweight",
      "key": "0xcd5c1f6df63bc97f4a8ce37f14a50ca70f923ef3252d0166429d36d20ed665a8"
    },
    {
      "name": "dmpQueue pageIndex",
      "key": "0xcd5c1f6df63bc97f4a8ce37f14a50ca754904d6d8c6fe06c4e5965f9b8397421"
    },
    {
      "name": "dmpQueue pages",
      "key": "0xcd5c1f6df63bc97f4a8ce37f14a50ca7d95d3e948effbeccff2de2c182672836"
    },
    {
      "name": "dmpQueue palletVersion",
      "key": "0xcd5c1f6df63bc97f4a8ce37f14a50ca74e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "electionProviderMultiPhase currentPhase",
      "key": "0xede8e4fdc3c8b556f0ce2f77fc2575e3d9764401941df7f707a47ba7db64a6ea"
    },
    {
      "name": "electionProviderMultiPhase desiredTargets",
      "key": "0xede8e4fdc3c8b556f0ce2f77fc2575e3720b70fd47fbed875a3a2dad4378ec4d"
    },
    {
      "name": "electionProviderMultiPhase minimumUntrustedScore",
      "key": "0xede8e4fdc3c8b556f0ce2f77fc2575e36d8bbda3bbbad46cc57d43825dd040c5"
    },
    {
      "name": "electionProviderMultiPhase palletVersion",
      "key": "0xede8e4fdc3c8b556f0ce2f77fc2575e34e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "electionProviderMultiPhase queuedSolution",
      "key": "0xede8e4fdc3c8b556f0ce2f77fc2575e3480ca1a34cacdb12affc67ecc3a08004"
    },
    {
      "name": "electionProviderMultiPhase round",
      "key": "0xede8e4fdc3c8b556f0ce2f77fc2575e313792e785168f725b60e2969c7fc2552"
    },
    {
      "name": "electionProviderMultiPhase signedSubmissionIndices",
      "key": "0xede8e4fdc3c8b556f0ce2f77fc2575e30bb1d35a8b4d31acec2fccbcf0172fc4"
    },
    {
      "name": "electionProviderMultiPhase signedSubmissionNextIndex",
      "key": "0xede8e4fdc3c8b556f0ce2f77fc2575e314ce3a66063250f71e0a11a517ea4062"
    },
    {
      "name": "electionProviderMultiPhase signedSubmissionsMap",
      "key": "0xede8e4fdc3c8b556f0ce2f77fc2575e3b3d1c643c0d45e2bb9269ac86c1dcda0"
    },
    {
      "name": "electionProviderMultiPhase snapshot",
      "key": "0xede8e4fdc3c8b556f0ce2f77fc2575e396d38fd45bc038faa9586fa93aa03ef7"
    },
    {
      "name": "electionProviderMultiPhase snapshotMetadata",
      "key": "0xede8e4fdc3c8b556f0ce2f77fc2575e32a3e5f1d461bf763a76013e062b46c0e"
    },
    {
      "name": "gilt active",
      "key": "0x6c63e84bfc5a0d62149aaab70897685c0f41321f75df7ea5127be2db4983c8b2"
    },
    {
      "name": "gilt activeTotal",
      "key": "0x6c63e84bfc5a0d62149aaab70897685c341651e3d1f3d76a2c678e594602a514"
    },
    {
      "name": "gilt palletVersion",
      "key": "0x6c63e84bfc5a0d62149aaab70897685c4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "gilt queues",
      "key": "0x6c63e84bfc5a0d62149aaab70897685cb5cd230cad01da4acb0378dad6ed82e9"
    },
    {
      "name": "gilt queueTotals",
      "key": "0x6c63e84bfc5a0d62149aaab70897685c4ba24bcd9ac206424105f255ae95a355"
    },
    {
      "name": "grandpa currentSetId",
      "key": "0x5f9cc45b7a00c5899361e1c6099678dc8a2d09463effcc78a22d75b9cb87dffc"
    },
    {
      "name": "grandpa nextForced",
      "key": "0x5f9cc45b7a00c5899361e1c6099678dc01d7818126bd9b3074803e91f4c91b59"
    },
    {
      "name": "grandpa palletVersion",
      "key": "0x5f9cc45b7a00c5899361e1c6099678dc4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "grandpa pendingChange",
      "key": "0x5f9cc45b7a00c5899361e1c6099678dc2ff65991b1c915dd6cc8d4825eacfcb4"
    },
    {
      "name": "grandpa setIdSession",
      "key": "0x5f9cc45b7a00c5899361e1c6099678dcd47cb8f5328af743ddfb361e7180e7fc"
    },
    {
      "name": "grandpa stalled",
      "key": "0x5f9cc45b7a00c5899361e1c6099678dc7ddd013461b72c3004f9c0ca3faf9ebe"
    },
    {
      "name": "grandpa state",
      "key": "0x5f9cc45b7a00c5899361e1c6099678dcf39a107f2d8d3854c9aba9b021f43d9c"
    },
    {
      "name": "historical historicalSessions",
      "key": "0x2f85f1e1378cb2d7b83adbaf0b5869c298ef7dc060436e4ed803af07632b89b6"
    },
    {
      "name": "historical palletVersion",
      "key": "0x2f85f1e1378cb2d7b83adbaf0b5869c24e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "historical storedRange",
      "key": "0x2f85f1e1378cb2d7b83adbaf0b5869c2ff3ae12770bea2e48d9bde7385e7a25f"
    },
    {
      "name": "hrmp hrmpAcceptedChannelRequestCount",
      "key": "0x6a0da05ca59913bc38a8630590f2627c36d88ddc2db28c074f385409f74d4fe7"
    },
    {
      "name": "hrmp hrmpChannelContents",
      "key": "0x6a0da05ca59913bc38a8630590f2627cabe953bb90b08a3782523e6dcf0c086a"
    },
    {
      "name": "hrmp hrmpChannelDigests",
      "key": "0x6a0da05ca59913bc38a8630590f2627ce0e67da63472835bb0b737093a19ad4c"
    },
    {
      "name": "hrmp hrmpChannels",
      "key": "0x6a0da05ca59913bc38a8630590f2627cb6604cff828a6e3f579ca6c59ace013d"
    },
    {
      "name": "hrmp hrmpCloseChannelRequests",
      "key": "0x6a0da05ca59913bc38a8630590f2627c7bb90bc2de3b30ea4238f53a9303869f"
    },
    {
      "name": "hrmp hrmpCloseChannelRequestsList",
      "key": "0x6a0da05ca59913bc38a8630590f2627c510d5b9b129ba92f70e9802b9e2e42b5"
    },
    {
      "name": "hrmp hrmpEgressChannelsIndex",
      "key": "0x6a0da05ca59913bc38a8630590f2627cf12b746dcf32e843354583c9702cc020"
    },
    {
      "name": "hrmp hrmpIngressChannelsIndex",
      "key": "0x6a0da05ca59913bc38a8630590f2627c1d3719f5b0b12c7105c073c507445948"
    },
    {
      "name": "hrmp hrmpOpenChannelRequestCount",
      "key": "0x6a0da05ca59913bc38a8630590f2627cc518fd88431757c717ade7ddfe02d10e"
    },
    {
      "name": "hrmp hrmpOpenChannelRequests",
      "key": "0x6a0da05ca59913bc38a8630590f2627c87fb3901b0fd2961e923a3ad6009b650"
    },
    {
      "name": "hrmp hrmpOpenChannelRequestsList",
      "key": "0x6a0da05ca59913bc38a8630590f2627c2a351b6a99a5b21324516e668bb86a57"
    },
    {
      "name": "hrmp hrmpWatermarks",
      "key": "0x6a0da05ca59913bc38a8630590f2627c09d487abe9aa06b94c8e59c187429a80"
    },
    {
      "name": "hrmp palletVersion",
      "key": "0x6a0da05ca59913bc38a8630590f2627c4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "identity identityOf",
      "key": "0x2aeddc77fe58c98d50bd37f1b90840f9cd7f37317cd20b61e9bd46fab8704714"
    },
    {
      "name": "identity palletVersion",
      "key": "0x2aeddc77fe58c98d50bd37f1b90840f94e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "identity registrars",
      "key": "0x2aeddc77fe58c98d50bd37f1b90840f91f7f3f3eb1c2a69978da998d19f74ec5"
    },
    {
      "name": "identity subsOf",
      "key": "0x2aeddc77fe58c98d50bd37f1b90840f96ee5a0b09e7e9a96219dd66f0f74c37e"
    },
    {
      "name": "identity superOf",
      "key": "0x2aeddc77fe58c98d50bd37f1b90840f943a953ac082e08b6527ce262dbd4abf2"
    },
    {
      "name": "imOnline authoredBlocks",
      "key": "0x2b06af9719ac64d755623cda8ddd9b94b1c371ded9e9c565e89ba783c4d5f5f9"
    },
    {
      "name": "imOnline heartbeatAfter",
      "key": "0x2b06af9719ac64d755623cda8ddd9b948aa1f2c9844f11024c1d204e705a6217"
    },
    {
      "name": "imOnline keys",
      "key": "0x2b06af9719ac64d755623cda8ddd9b949f99a2ce711f3a31b2fc05604c93f179"
    },
    {
      "name": "imOnline palletVersion",
      "key": "0x2b06af9719ac64d755623cda8ddd9b944e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "imOnline receivedHeartbeats",
      "key": "0x2b06af9719ac64d755623cda8ddd9b94cc5a1aa6e3716372f36ef103b7e3ae67"
    },
    {
      "name": "indices accounts",
      "key": "0x1a736d37504c2e3fb73dad160c55b2918ee7418a6531173d60d1f6a82d8f4d51"
    },
    {
      "name": "indices palletVersion",
      "key": "0x1a736d37504c2e3fb73dad160c55b2914e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "initializer bufferedSessionChanges",
      "key": "0x31a3a2ce3603138b8b352e8f192ca55afe916363577f9f8ca28ca8966d649c1a"
    },
    {
      "name": "initializer hasInitialized",
      "key": "0x31a3a2ce3603138b8b352e8f192ca55ac9e06aebb5bcb51e5f883784b1269289"
    },
    {
      "name": "initializer palletVersion",
      "key": "0x31a3a2ce3603138b8b352e8f192ca55a4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "membership members",
      "key": "0x2ce461329fdf4be12bce01afc0af09bcba7fb8745735dc3be2a2c61a72c39e78"
    },
    {
      "name": "membership palletVersion",
      "key": "0x2ce461329fdf4be12bce01afc0af09bc4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "membership prime",
      "key": "0x2ce461329fdf4be12bce01afc0af09bccb3136ee16886ac28a54f39e605b387a"
    },
    {
      "name": "mmr nodes",
      "key": "0xa8c65209d47ee80f56b0011e8fd91f50519dfc7fdad21b84f64a5310fa178ef2"
    },
    {
      "name": "mmr numberOfLeaves",
      "key": "0xa8c65209d47ee80f56b0011e8fd91f508156209906244f2341137c136774c91d"
    },
    {
      "name": "mmr palletVersion",
      "key": "0xa8c65209d47ee80f56b0011e8fd91f504e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "mmr rootHash",
      "key": "0xa8c65209d47ee80f56b0011e8fd91f50d42f676807518c67bb427546ba406fa1"
    },
    {
      "name": "mmrLeaf beefyNextAuthorities",
      "key": "0xda7d4185f8093e80caceb64da45219e30c98535b82c72faf3c64974094af4643"
    },
    {
      "name": "mmrLeaf palletVersion",
      "key": "0xda7d4185f8093e80caceb64da45219e34e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "multisig calls",
      "key": "0x7474449cca95dc5d0c00e71735a6d17d99cb677bc149d4450f9c0e1ec4d0d9c0"
    },
    {
      "name": "multisig multisigs",
      "key": "0x7474449cca95dc5d0c00e71735a6d17d3cd15a3fd6e04e47bee3922dbfa92c8d"
    },
    {
      "name": "multisig palletVersion",
      "key": "0x7474449cca95dc5d0c00e71735a6d17d4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "nominationPools bondedPools",
      "key": "0x7a6d38deaa01cb6e76ee69889f1696271f7c4e57dc49e4d6d003b730a7894f32"
    },
    {
      "name": "nominationPools counterForBondedPools",
      "key": "0x7a6d38deaa01cb6e76ee69889f169627609b6046c8c80d11c4732bbbe86ef2e0"
    },
    {
      "name": "nominationPools counterForMetadata",
      "key": "0x7a6d38deaa01cb6e76ee69889f169627582dea89936cef588ec31bdd05d700fc"
    },
    {
      "name": "nominationPools counterForPoolMembers",
      "key": "0x7a6d38deaa01cb6e76ee69889f16962794bbbc851119626279ec0cdf6fcbcf12"
    },
    {
      "name": "nominationPools counterForReversePoolIdLookup",
      "key": "0x7a6d38deaa01cb6e76ee69889f1696277296f62eda7ddb33d83593e4ffcabfc1"
    },
    {
      "name": "nominationPools counterForRewardPools",
      "key": "0x7a6d38deaa01cb6e76ee69889f169627374e737bb4879ac566901b28e793842f"
    },
    {
      "name": "nominationPools counterForSubPoolsStorage",
      "key": "0x7a6d38deaa01cb6e76ee69889f169627325473ed8c2a551346dc0c693385cb0f"
    },
    {
      "name": "nominationPools lastPoolId",
      "key": "0x7a6d38deaa01cb6e76ee69889f169627d43b7d26b38de545329a6328cd52f371"
    },
    {
      "name": "nominationPools maxPoolMembers",
      "key": "0x7a6d38deaa01cb6e76ee69889f16962730256ea2c545a3e5e3744665ffb2ed28"
    },
    {
      "name": "nominationPools maxPoolMembersPerPool",
      "key": "0x7a6d38deaa01cb6e76ee69889f1696273f0d64e1907361c689834a9c1cb0fbe0"
    },
    {
      "name": "nominationPools maxPools",
      "key": "0x7a6d38deaa01cb6e76ee69889f169627ba93302f3b868c50785e6ade45c6a1d8"
    },
    {
      "name": "nominationPools metadata",
      "key": "0x7a6d38deaa01cb6e76ee69889f169627b5f3822e35ca2f31ce3526eab1363fd2"
    },
    {
      "name": "nominationPools minCreateBond",
      "key": "0x7a6d38deaa01cb6e76ee69889f16962749d67997de33812a1cc37310f765b82e"
    },
    {
      "name": "nominationPools minJoinBond",
      "key": "0x7a6d38deaa01cb6e76ee69889f1696272be9a4e88368a2188d2b9100a9f3cd43"
    },
    {
      "name": "nominationPools palletVersion",
      "key": "0x7a6d38deaa01cb6e76ee69889f1696274e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "nominationPools poolMembers",
      "key": "0x7a6d38deaa01cb6e76ee69889f1696273c5f69e270d5b7a07f9996fe9e4e0488"
    },
    {
      "name": "nominationPools reversePoolIdLookup",
      "key": "0x7a6d38deaa01cb6e76ee69889f169627a3894665c917e5e6848f758cb8babbe3"
    },
    {
      "name": "nominationPools rewardPools",
      "key": "0x7a6d38deaa01cb6e76ee69889f169627fa0883f96ad25255581bef5ba72b8750"
    },
    {
      "name": "nominationPools subPoolsStorage",
      "key": "0x7a6d38deaa01cb6e76ee69889f169627a09a44dda6e50da0e42409e84ea3daa4"
    },
    {
      "name": "offences concurrentReportsIndex",
      "key": "0xd5c41b52a371aa36c9254ce34324f2a560dc8ef000cdbdc859dd352229ce16fb"
    },
    {
      "name": "offences palletVersion",
      "key": "0xd5c41b52a371aa36c9254ce34324f2a54e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "offences reports",
      "key": "0xd5c41b52a371aa36c9254ce34324f2a5b262e9238fa402540c250bc3f5d6188d"
    },
    {
      "name": "offences reportsByKindIndex",
      "key": "0xd5c41b52a371aa36c9254ce34324f2a53589c0dac50da6fb3a3611eb32bcd27e"
    },
    {
      "name": "parachainInfo palletVersion",
      "key": "0x0d715f2646c8f85767b5d2764bb278264e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "parachainInfo parachainId",
      "key": "0x0d715f2646c8f85767b5d2764bb2782604a74d81251e398fd8a0a4d55023bb3f"
    },
    {
      "name": "parachainSystem announcedHrmpMessagesPerCandidate",
      "key": "0x45323df7cc47150b3930e2666b0aa31362f8058e9dc65b738fce4a22e26fa4f2"
    },
    {
      "name": "parachainSystem authorizedUpgrade",
      "key": "0x45323df7cc47150b3930e2666b0aa3132fa9f1bf25567808771bff091dc89ecd"
    },
    {
      "name": "parachainSystem customValidationHeadData",
      "key": "0x45323df7cc47150b3930e2666b0aa313d7a4d3f444d188a40b125c716c2588ad"
    },
    {
      "name": "parachainSystem didSetValidationCode",
      "key": "0x45323df7cc47150b3930e2666b0aa313a48f1ed033b256e315045c5316b3594a"
    },
    {
      "name": "parachainSystem hostConfiguration",
      "key": "0x45323df7cc47150b3930e2666b0aa313c522231880238a0c56021b8744a00743"
    },
    {
      "name": "parachainSystem hrmpOutboundMessages",
      "key": "0x45323df7cc47150b3930e2666b0aa3134ec0959dca9d4616632a822d7523ba63"
    },
    {
      "name": "parachainSystem hrmpWatermark",
      "key": "0x45323df7cc47150b3930e2666b0aa3135bfe10cc238cbe01134b415c7c0d8dc4"
    },
    {
      "name": "parachainSystem lastDmqMqcHead",
      "key": "0x45323df7cc47150b3930e2666b0aa313911a5dd3f1155f5b7d0c5aa102a757f9"
    },
    {
      "name": "parachainSystem lastHrmpMqcHeads",
      "key": "0x45323df7cc47150b3930e2666b0aa3133dca42deb008c6559ee789c9b9f70a2c"
    },
    {
      "name": "parachainSystem newValidationCode",
      "key": "0x45323df7cc47150b3930e2666b0aa3138a9c0c1edbfb15b7bd5cb0b0aefa6c60"
    },
    {
      "name": "parachainSystem palletVersion",
      "key": "0x45323df7cc47150b3930e2666b0aa3134e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "parachainSystem pendingUpwardMessages",
      "key": "0x45323df7cc47150b3930e2666b0aa3130a6ccf00f78ac824e72d27429ca3b8b0"
    },
    {
      "name": "parachainSystem pendingValidationCode",
      "key": "0x45323df7cc47150b3930e2666b0aa31390d171f8401887cf06fb43a732994c32"
    },
    {
      "name": "parachainSystem processedDownwardMessages",
      "key": "0x45323df7cc47150b3930e2666b0aa313d674f3eb03defaf86fb09583ef9996dd"
    },
    {
      "name": "parachainSystem relayStateProof",
      "key": "0x45323df7cc47150b3930e2666b0aa3138399ce59b27ca884649213623132836d"
    },
    {
      "name": "parachainSystem relevantMessagingState",
      "key": "0x45323df7cc47150b3930e2666b0aa3132a47b0ddcc4fcdffe6c6b0b119e45c28"
    },
    {
      "name": "parachainSystem reservedDmpWeightOverride",
      "key": "0x45323df7cc47150b3930e2666b0aa31394475507fceb015929262d7fa716c2d2"
    },
    {
      "name": "parachainSystem reservedXcmpWeightOverride",
      "key": "0x45323df7cc47150b3930e2666b0aa3137a67df45a2da7255e2aee979a25f0eb1"
    },
    {
      "name": "parachainSystem upgradeRestrictionSignal",
      "key": "0x45323df7cc47150b3930e2666b0aa313f27bbb460270642b5bcaf032ea04d56a"
    },
    {
      "name": "parachainSystem upwardMessages",
      "key": "0x45323df7cc47150b3930e2666b0aa313549294c71991aee810463ccf34a0f1d1"
    },
    {
      "name": "parachainSystem validationData",
      "key": "0x45323df7cc47150b3930e2666b0aa313d422e17d2affdce4a912d187a734dd67"
    },
    {
      "name": "paraInclusion availabilityBitfields",
      "key": "0x196e027349017067f9eb56e2c4d9ded54c41cbd797546e5290a95ef20a38bca6"
    },
    {
      "name": "paraInclusion palletVersion",
      "key": "0x196e027349017067f9eb56e2c4d9ded54e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "paraInclusion pendingAvailability",
      "key": "0x196e027349017067f9eb56e2c4d9ded5a2ee677da3917cc29ee3b29c9f94c865"
    },
    {
      "name": "paraInclusion pendingAvailabilityCommitments",
      "key": "0x196e027349017067f9eb56e2c4d9ded50433e4ed72dccf0edcf58c3192f16e4b"
    },
    {
      "name": "paraInherent included",
      "key": "0x42b50b77ef717947e7043bb52127d665e2b2d1966457295060d0b3c7e44dca63"
    },
    {
      "name": "paraInherent onChainVotes",
      "key": "0x42b50b77ef717947e7043bb52127d665497c98950f50bade7420dce7829823a3"
    },
    {
      "name": "paraInherent palletVersion",
      "key": "0x42b50b77ef717947e7043bb52127d6654e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "paras actionsQueue",
      "key": "0xcd710b30bd2eab0352ddcc26417aa1947e18a20a95b5f505fd64f8ec22bae8cf"
    },
    {
      "name": "paras codeByHash",
      "key": "0xcd710b30bd2eab0352ddcc26417aa194383e6dcb39e0be0a2e6aeb8b94951ab6"
    },
    {
      "name": "paras codeByHashRefs",
      "key": "0xcd710b30bd2eab0352ddcc26417aa1948c27d984a48a10b1ebf28036a4a4444b"
    },
    {
      "name": "paras currentCodeHash",
      "key": "0xcd710b30bd2eab0352ddcc26417aa194e2d1c22ba0a888147714a3487bd51c63"
    },
    {
      "name": "paras futureCodeHash",
      "key": "0xcd710b30bd2eab0352ddcc26417aa194cad3324113c312669f1ac3d50722524b"
    },
    {
      "name": "paras futureCodeUpgrades",
      "key": "0xcd710b30bd2eab0352ddcc26417aa19440a2e3ef2d6b1b7b64ce36356e02087e"
    },
    {
      "name": "paras heads",
      "key": "0xcd710b30bd2eab0352ddcc26417aa1941b3c252fcb29d88eff4f3de5de4476c3"
    },
    {
      "name": "paras palletVersion",
      "key": "0xcd710b30bd2eab0352ddcc26417aa1944e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "paras parachains",
      "key": "0xcd710b30bd2eab0352ddcc26417aa1940b76934f4cc08dee01012d059e1b83ee"
    },
    {
      "name": "paras paraLifecycles",
      "key": "0xcd710b30bd2eab0352ddcc26417aa194281e0bfde17b36573208a06cb5cfba6b"
    },
    {
      "name": "paras pastCodeHash",
      "key": "0xcd710b30bd2eab0352ddcc26417aa19429abfbd4b8147ce6d1fdd68804ea8549"
    },
    {
      "name": "paras pastCodeMeta",
      "key": "0xcd710b30bd2eab0352ddcc26417aa194f396cc48786b105ccef72bfd09aa14b5"
    },
    {
      "name": "paras pastCodePruning",
      "key": "0xcd710b30bd2eab0352ddcc26417aa194fdad6eef5c4b1c68eaa71ea17a02d9de"
    },
    {
      "name": "paras pvfActiveVoteList",
      "key": "0xcd710b30bd2eab0352ddcc26417aa1949f4993f016e2d2f8e5f43be7bb259486"
    },
    {
      "name": "paras pvfActiveVoteMap",
      "key": "0xcd710b30bd2eab0352ddcc26417aa194b2653c2bebd76bb707c1566780cefa08"
    },
    {
      "name": "paras upcomingParasGenesis",
      "key": "0xcd710b30bd2eab0352ddcc26417aa194ec9e58efe80ec091079c37555f427b96"
    },
    {
      "name": "paras upcomingUpgrades",
      "key": "0xcd710b30bd2eab0352ddcc26417aa19463c716fb8fff3de61a883bb76adb34a2"
    },
    {
      "name": "paras upgradeCooldowns",
      "key": "0xcd710b30bd2eab0352ddcc26417aa1940b5b4dff03a5cf61db8ad989de75f0ab"
    },
    {
      "name": "paras upgradeGoAheadSignal",
      "key": "0xcd710b30bd2eab0352ddcc26417aa1949e94c040f5e73d9b7addd6cb603d15d3"
    },
    {
      "name": "paras upgradeRestrictionSignal",
      "key": "0xcd710b30bd2eab0352ddcc26417aa194f27bbb460270642b5bcaf032ea04d56a"
    },
    {
      "name": "paraScheduler availabilityCores",
      "key": "0x94eadf0156a8ad5156507773d0471e4ab8ebad86f546c7e0b135a4212aace339"
    },
    {
      "name": "paraScheduler palletVersion",
      "key": "0x94eadf0156a8ad5156507773d0471e4a4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "paraScheduler parathreadClaimIndex",
      "key": "0x94eadf0156a8ad5156507773d0471e4a1e8de4295679f32032acb318db364135"
    },
    {
      "name": "paraScheduler parathreadQueue",
      "key": "0x94eadf0156a8ad5156507773d0471e4a64fb6e378f53d72f7859ad0e6b6d8810"
    },
    {
      "name": "paraScheduler scheduled",
      "key": "0x94eadf0156a8ad5156507773d0471e4a9bc855155137f5ee950395a0aa27ea03"
    },
    {
      "name": "paraScheduler sessionStartBlock",
      "key": "0x94eadf0156a8ad5156507773d0471e4a9ce0310edffce7a01a96c2039f92dd10"
    },
    {
      "name": "paraScheduler validatorGroups",
      "key": "0x94eadf0156a8ad5156507773d0471e4a16973e1142f5bd30d9464076794007db"
    },
    {
      "name": "parasDisputes disputes",
      "key": "0x50e709b04947c0cd2f04727ef76e88f66ad0691af7b285f7855961737137ac7c"
    },
    {
      "name": "parasDisputes frozen",
      "key": "0x50e709b04947c0cd2f04727ef76e88f6714be44787cd335deef07320ec7d0772"
    },
    {
      "name": "parasDisputes included",
      "key": "0x50e709b04947c0cd2f04727ef76e88f6e2b2d1966457295060d0b3c7e44dca63"
    },
    {
      "name": "parasDisputes lastPrunedSession",
      "key": "0x50e709b04947c0cd2f04727ef76e88f61f7617ba134236a5459bfcc02e769d63"
    },
    {
      "name": "parasDisputes palletVersion",
      "key": "0x50e709b04947c0cd2f04727ef76e88f64e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "parasDisputes spamSlots",
      "key": "0x50e709b04947c0cd2f04727ef76e88f62ca16c15e198e11c98e3b6578a5105b4"
    },
    {
      "name": "paraSessionInfo assignmentKeysUnsafe",
      "key": "0x4da2c41eaffa8e1a791c5d65beeefd1f0b46c2d67d222c68b91e1b22cefe7a2b"
    },
    {
      "name": "paraSessionInfo earliestStoredSession",
      "key": "0x4da2c41eaffa8e1a791c5d65beeefd1fff4a51b74593c3708682038efe5323b5"
    },
    {
      "name": "paraSessionInfo palletVersion",
      "key": "0x4da2c41eaffa8e1a791c5d65beeefd1f4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "paraSessionInfo sessions",
      "key": "0x4da2c41eaffa8e1a791c5d65beeefd1f028685274e698e781f7f2766cba0cc83"
    },
    {
      "name": "parasShared activeValidatorIndices",
      "key": "0xb341e3a63e58a188839b242d17f8c9f82586833f834350b4d435d5fd269ecc8b"
    },
    {
      "name": "parasShared activeValidatorKeys",
      "key": "0xb341e3a63e58a188839b242d17f8c9f87a50c904b368210021127f9238883a6e"
    },
    {
      "name": "parasShared currentSessionIndex",
      "key": "0xb341e3a63e58a188839b242d17f8c9f8b5cab3380174032968897a4c3ce57c0a"
    },
    {
      "name": "parasShared palletVersion",
      "key": "0xb341e3a63e58a188839b242d17f8c9f84e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "phragmenElection candidates",
      "key": "0xe2e62dd81c48a88f73b6f6463555fd8e948ece45793d7f15c9c0b9574ddbc665"
    },
    {
      "name": "phragmenElection electionRounds",
      "key": "0xe2e62dd81c48a88f73b6f6463555fd8e7657ad2ff3a6742e1071bbb898ce5431"
    },
    {
      "name": "phragmenElection members",
      "key": "0xe2e62dd81c48a88f73b6f6463555fd8eba7fb8745735dc3be2a2c61a72c39e78"
    },
    {
      "name": "phragmenElection palletVersion",
      "key": "0xe2e62dd81c48a88f73b6f6463555fd8e4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "phragmenElection runnersUp",
      "key": "0xe2e62dd81c48a88f73b6f6463555fd8e40982df579bdf1315224f41e5f482063"
    },
    {
      "name": "phragmenElection voting",
      "key": "0xe2e62dd81c48a88f73b6f6463555fd8e71cd3068e6118bfb392b798317f63a89"
    },
    {
      "name": "polkadotXcm assetTraps",
      "key": "0xe38f185207498abb5c213d0fb059b3d8d499693d59a5a8e17fe4824942a77f46"
    },
    {
      "name": "polkadotXcm currentMigration",
      "key": "0xe38f185207498abb5c213d0fb059b3d8ccd77ccc2ae2622977ad8c5852b900f0"
    },
    {
      "name": "polkadotXcm palletVersion",
      "key": "0xe38f185207498abb5c213d0fb059b3d84e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "polkadotXcm queries",
      "key": "0xe38f185207498abb5c213d0fb059b3d87a5ad396bc2564b37426d15eb837c250"
    },
    {
      "name": "polkadotXcm queryCounter",
      "key": "0xe38f185207498abb5c213d0fb059b3d882108f7b0ed56319a6fe5001d542b7a5"
    },
    {
      "name": "polkadotXcm safeXcmVersion",
      "key": "0xe38f185207498abb5c213d0fb059b3d86323ae84c43568be0d1394d5d0d522c4"
    },
    {
      "name": "polkadotXcm supportedVersion",
      "key": "0xe38f185207498abb5c213d0fb059b3d8908b4dae59e7d658f23d261c5e5db22b"
    },
    {
      "name": "polkadotXcm versionDiscoveryQueue",
      "key": "0xe38f185207498abb5c213d0fb059b3d84a222ba0333561192e474c59ed8e30e1"
    },
    {
      "name": "polkadotXcm versionNotifiers",
      "key": "0xe38f185207498abb5c213d0fb059b3d8db8f48f20e9ff76107a081bb8a607cd5"
    },
    {
      "name": "polkadotXcm versionNotifyTargets",
      "key": "0xe38f185207498abb5c213d0fb059b3d8d8371c747517151d863f926f819718df"
    },
    {
      "name": "preimage palletVersion",
      "key": "0xd8f314b7f4e6b095f0f8ee4656a448254e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "preimage preimageFor",
      "key": "0xd8f314b7f4e6b095f0f8ee4656a448257c7dda85c9c297999fd02215e8c8f9de"
    },
    {
      "name": "preimage statusFor",
      "key": "0xd8f314b7f4e6b095f0f8ee4656a4482555b1ae8eced5522f3c4049bc84eda4a8"
    },
    {
      "name": "proxy announcements",
      "key": "0x1809d78346727a0ef58c0fa03bafa323a20a5b2f6b19a88cf22a45d869c2bc1b"
    },
    {
      "name": "proxy palletVersion",
      "key": "0x1809d78346727a0ef58c0fa03bafa3234e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "proxy proxies",
      "key": "0x1809d78346727a0ef58c0fa03bafa3231d885dcfb277f185f2d8e62a5f290c85"
    },
    {
      "name": "recovery activeRecoveries",
      "key": "0xa2ce73642c549ae79c14f0a671cf45f9dff9094d7baf1e2d9b2e3a4253b096f8"
    },
    {
      "name": "recovery palletVersion",
      "key": "0xa2ce73642c549ae79c14f0a671cf45f94e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "recovery proxy",
      "key": "0xa2ce73642c549ae79c14f0a671cf45f91809d78346727a0ef58c0fa03bafa323"
    },
    {
      "name": "recovery recoverable",
      "key": "0xa2ce73642c549ae79c14f0a671cf45f9a3f57184ab60571b3be8a355d07be414"
    },
    {
      "name": "registrar nextFreeParaId",
      "key": "0x3fba98689ebed1138735e0e7a5a790abee99a84ccbfb4b82e714617e5e06f6f7"
    },
    {
      "name": "registrar palletVersion",
      "key": "0x3fba98689ebed1138735e0e7a5a790ab4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "registrar paras",
      "key": "0x3fba98689ebed1138735e0e7a5a790abcd710b30bd2eab0352ddcc26417aa194"
    },
    {
      "name": "registrar pendingSwap",
      "key": "0x3fba98689ebed1138735e0e7a5a790ab050d60f58013e1a094de5dc9f24ea109"
    },
    {
      "name": "scheduler agenda",
      "key": "0x3db7a24cfdc9de785974746c14a99df91643f5419718219c95679ddd2d825574"
    },
    {
      "name": "scheduler lookup",
      "key": "0x3db7a24cfdc9de785974746c14a99df9891ad457bf4da54990fa84a2acb148a2"
    },
    {
      "name": "scheduler palletVersion",
      "key": "0x3db7a24cfdc9de785974746c14a99df94e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "session currentIndex",
      "key": "0xcec5070d609dd3497f72bde07fc96ba072763800a36a99fdfc7c10f6415f6ee6"
    },
    {
      "name": "session disabledValidators",
      "key": "0xcec5070d609dd3497f72bde07fc96ba05a9a74be4a5a7df60b01a6c0326c5e20"
    },
    {
      "name": "session keyOwner",
      "key": "0xcec5070d609dd3497f72bde07fc96ba0726380404683fc89e8233450c8aa1950"
    },
    {
      "name": "session nextKeys",
      "key": "0xcec5070d609dd3497f72bde07fc96ba04c014e6bf8b8c2c011e7290b85696bb3"
    },
    {
      "name": "session palletVersion",
      "key": "0xcec5070d609dd3497f72bde07fc96ba04e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "session queuedChanged",
      "key": "0xcec5070d609dd3497f72bde07fc96ba09450bfa4b96a3fa7a3c8f40da6bf32e1"
    },
    {
      "name": "session queuedKeys",
      "key": "0xcec5070d609dd3497f72bde07fc96ba0e0cdd062e6eaf24295ad4ccfc41d4609"
    },
    {
      "name": "session validators",
      "key": "0xcec5070d609dd3497f72bde07fc96ba088dcde934c658227ee1dfafcd6e16903"
    },
    {
      "name": "slots leases",
      "key": "0x6ac983d82528bf1595ab26438ae5b2cfdcacfdc7cf2aee764aab63f7cc97dc25"
    },
    {
      "name": "slots palletVersion",
      "key": "0x6ac983d82528bf1595ab26438ae5b2cf4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "society bids",
      "key": "0x426e15054d267946093858132eb537f1c4f1521904024343c14aea2e016c84d7"
    },
    {
      "name": "society candidates",
      "key": "0x426e15054d267946093858132eb537f1948ece45793d7f15c9c0b9574ddbc665"
    },
    {
      "name": "society defender",
      "key": "0x426e15054d267946093858132eb537f1d3bcf3722b2e2300078c9d1795079f6e"
    },
    {
      "name": "society defenderVotes",
      "key": "0x426e15054d267946093858132eb537f191ca57b0c4b20b29ae7e99d6201d680c"
    },
    {
      "name": "society founder",
      "key": "0x426e15054d267946093858132eb537f195999521c6c89cd80b677e53ce20f98c"
    },
    {
      "name": "society head",
      "key": "0x426e15054d267946093858132eb537f105fe52c2045750c3c492ccdcf62e2b9c"
    },
    {
      "name": "society maxMembers",
      "key": "0x426e15054d267946093858132eb537f1d0b4a3f7631f0c0e761898fe198211de"
    },
    {
      "name": "society members",
      "key": "0x426e15054d267946093858132eb537f1ba7fb8745735dc3be2a2c61a72c39e78"
    },
    {
      "name": "society palletVersion",
      "key": "0x426e15054d267946093858132eb537f14e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "society payouts",
      "key": "0x426e15054d267946093858132eb537f119f4459916c774a1c3287d8ac99e98b9"
    },
    {
      "name": "society pot",
      "key": "0x426e15054d267946093858132eb537f1a47a9ff5cd5bf4d848a80a0b1a947dc3"
    },
    {
      "name": "society rules",
      "key": "0x426e15054d267946093858132eb537f1ad8964373ae14fde6a1b12a2ccb7aebd"
    },
    {
      "name": "society strikes",
      "key": "0x426e15054d267946093858132eb537f10da61bea5fc7de17ebdf361b9914e50b"
    },
    {
      "name": "society suspendedCandidates",
      "key": "0x426e15054d267946093858132eb537f1bbf9723cdae80db599c0e53c5a470cd2"
    },
    {
      "name": "society suspendedMembers",
      "key": "0x426e15054d267946093858132eb537f14961503206762969ef4828521ef92a35"
    },
    {
      "name": "society votes",
      "key": "0x426e15054d267946093858132eb537f1b4adc6a1ce4f7cc2e696ed0fd06bd01c"
    },
    {
      "name": "society vouching",
      "key": "0x426e15054d267946093858132eb537f105eef273131bee9ab1033b8db9e5ab8c"
    },
    {
      "name": "staking activeEra",
      "key": "0x5f3e4907f716ac89b6347d15ececedca487df464e44a534ba6b0cbb32407b587"
    },
    {
      "name": "staking bonded",
      "key": "0x5f3e4907f716ac89b6347d15ececedca3ed14b45ed20d054f05e37e2542cfe70"
    },
    {
      "name": "staking bondedEras",
      "key": "0x5f3e4907f716ac89b6347d15ececedcaea07de2b8f010516dca3f7ef52f7ac5a"
    },
    {
      "name": "staking canceledSlashPayout",
      "key": "0x5f3e4907f716ac89b6347d15ececedca28dccb559b95c40168a1b2696581b5a7"
    },
    {
      "name": "staking chillThreshold",
      "key": "0x5f3e4907f716ac89b6347d15ececedcacddc49c5f30807d474a09d70fed8a569"
    },
    {
      "name": "staking counterForNominators",
      "key": "0x5f3e4907f716ac89b6347d15ececedcaf99b25852d3d69419882da651375cdb3"
    },
    {
      "name": "staking counterForValidators",
      "key": "0x5f3e4907f716ac89b6347d15ececedca6ddc7809c6da9bb6093ee22e0fda4ba8"
    },
    {
      "name": "staking currentEra",
      "key": "0x5f3e4907f716ac89b6347d15ececedca0b6a45321efae92aea15e0740ec7afe7"
    },
    {
      "name": "staking currentPlannedSession",
      "key": "0x5f3e4907f716ac89b6347d15ececedcac0d39ff577af2cc6b67ac3641fa9c4e7"
    },
    {
      "name": "staking earliestUnappliedSlash",
      "key": "0x5f3e4907f716ac89b6347d15ececedca605b2c046b5509037f3f158b9741d037"
    },
    {
      "name": "staking erasRewardPoints",
      "key": "0x5f3e4907f716ac89b6347d15ececedca80cc6574281671b299c1727d7ac68cab"
    },
    {
      "name": "staking erasStakers",
      "key": "0x5f3e4907f716ac89b6347d15ececedca8bde0a0ea8864605e3b68ed9cb2da01b"
    },
    {
      "name": "staking erasStakersClipped",
      "key": "0x5f3e4907f716ac89b6347d15ececedca42982b9d6c7acc99faa9094c912372c2"
    },
    {
      "name": "staking erasStartSessionIndex",
      "key": "0x5f3e4907f716ac89b6347d15ececedcaad811cd65a470ddc5f1d628ff0550982"
    },
    {
      "name": "staking erasTotalStake",
      "key": "0x5f3e4907f716ac89b6347d15ececedcaa141c4fe67c2d11f4a10c6aca7a79a04"
    },
    {
      "name": "staking erasValidatorPrefs",
      "key": "0x5f3e4907f716ac89b6347d15ececedca682db92dde20a10d96d00ff0e9e221c0"
    },
    {
      "name": "staking erasValidatorReward",
      "key": "0x5f3e4907f716ac89b6347d15ececedca7e6ed2ee507c7b4441d59e4ded44b8a2"
    },
    {
      "name": "staking forceEra",
      "key": "0x5f3e4907f716ac89b6347d15ececedcaf7dad0317324aecae8744b87fc95f2f3"
    },
    {
      "name": "staking historyDepth",
      "key": "0x5f3e4907f716ac89b6347d15ececedcaac0a2cbf8e355f5ea6cb2de8727bfb0c"
    },
    {
      "name": "staking invulnerables",
      "key": "0x5f3e4907f716ac89b6347d15ececedca5579297f4dfb9609e7e4c2ebab9ce40a"
    },
    {
      "name": "staking ledger",
      "key": "0x5f3e4907f716ac89b6347d15ececedca422adb579f1dbf4f3886c5cfa3bb8cc4"
    },
    {
      "name": "staking maxNominatorsCount",
      "key": "0x5f3e4907f716ac89b6347d15ececedcad642c00af119adf30dc11d32e9f0886d"
    },
    {
      "name": "staking maxValidatorsCount",
      "key": "0x5f3e4907f716ac89b6347d15ececedca98c2640cda6c0d801194a8a61c699224"
    },
    {
      "name": "staking minCommission",
      "key": "0x5f3e4907f716ac89b6347d15ececedca58b0c9c1fa6cc13759ead9b42db9eebe"
    },
    {
      "name": "staking minimumValidatorCount",
      "key": "0x5f3e4907f716ac89b6347d15ececedcab49a2738eeb30896aacb8b3fb46471bd"
    },
    {
      "name": "staking minNominatorBond",
      "key": "0x5f3e4907f716ac89b6347d15ececedcaed441ceb81326c56263efbb60c95c2e4"
    },
    {
      "name": "staking minValidatorBond",
      "key": "0x5f3e4907f716ac89b6347d15ececedca666fdcbb473985b3ac933d13f4acff8d"
    },
    {
      "name": "staking nominators",
      "key": "0x5f3e4907f716ac89b6347d15ececedca9c6a637f62ae2af1c7e31eed7e96be04"
    },
    {
      "name": "staking nominatorSlashInEra",
      "key": "0x5f3e4907f716ac89b6347d15ececedca815008e8210b6d6cf701e22e5bf27141"
    },
    {
      "name": "staking offendingValidators",
      "key": "0x5f3e4907f716ac89b6347d15ececedcaa2721b5fdc019ff2482f9172ab882a78"
    },
    {
      "name": "staking palletVersion",
      "key": "0x5f3e4907f716ac89b6347d15ececedca4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "staking payee",
      "key": "0x5f3e4907f716ac89b6347d15ececedca9220e172bed316605f73f1ff7b4ade98"
    },
    {
      "name": "staking slashingSpans",
      "key": "0x5f3e4907f716ac89b6347d15ececedcaab6a212bc08a5603828f33f90ec4a139"
    },
    {
      "name": "staking slashRewardFraction",
      "key": "0x5f3e4907f716ac89b6347d15ececedcac29a0310e1bb45d20cace77ccb62c97d"
    },
    {
      "name": "staking spanSlash",
      "key": "0x5f3e4907f716ac89b6347d15ececedcae62f6f797ebe9138dfced942977fea50"
    },
    {
      "name": "staking storageVersion",
      "key": "0x5f3e4907f716ac89b6347d15ececedca308ce9615de0775a82f8a94dc3d285a1"
    },
    {
      "name": "staking unappliedSlashes",
      "key": "0x5f3e4907f716ac89b6347d15ececedca042824170a5db4381fe3395039cabd24"
    },
    {
      "name": "staking validatorCount",
      "key": "0x5f3e4907f716ac89b6347d15ececedca138e71612491192d68deab7e6f563fe1"
    },
    {
      "name": "staking validators",
      "key": "0x5f3e4907f716ac89b6347d15ececedca88dcde934c658227ee1dfafcd6e16903"
    },
    {
      "name": "staking validatorSlashInEra",
      "key": "0x5f3e4907f716ac89b6347d15ececedcaad6e15ee7bfd5d55eba1012487d3af54"
    },
    {
      "name": "sudo key",
      "key": "0x5c0d1176a568c1f92944340dbfed9e9c530ebca703c85910e7164cb7d1c9e47b"
    },
    {
      "name": "sudo palletVersion",
      "key": "0x5c0d1176a568c1f92944340dbfed9e9c4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "system account",
      "key": "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9"
    },
    {
      "name": "system allExtrinsicsLen",
      "key": "0x26aa394eea5630e07c48ae0c9558cef7a86da5a932684f199539836fcb8c886f"
    },
    {
      "name": "system blockHash",
      "key": "0x26aa394eea5630e07c48ae0c9558cef7a44704b568d21667356a5a050c118746"
    },
    {
      "name": "system blockWeight",
      "key": "0x26aa394eea5630e07c48ae0c9558cef734abf5cb34d6244378cddbf18e849d96"
    },
    {
      "name": "system digest",
      "key": "0x26aa394eea5630e07c48ae0c9558cef799e7f93fc6a98f0874fd057f111c4d2d"
    },
    {
      "name": "system eventCount",
      "key": "0x26aa394eea5630e07c48ae0c9558cef70a98fdbe9ce6c55837576c60c7af3850"
    },
    {
      "name": "system events",
      "key": "0x26aa394eea5630e07c48ae0c9558cef780d41e5e16056765bc8461851072c9d7"
    },
    {
      "name": "system eventTopics",
      "key": "0x26aa394eea5630e07c48ae0c9558cef7bb94e1c21adab714983cf06622e1de76"
    },
    {
      "name": "system executionPhase",
      "key": "0x26aa394eea5630e07c48ae0c9558cef7ff553b5a9862a516939d82b3d3d8661a"
    },
    {
      "name": "system extrinsicCount",
      "key": "0x26aa394eea5630e07c48ae0c9558cef7bdc0bd303e9855813aa8a30d4efc5112"
    },
    {
      "name": "system extrinsicData",
      "key": "0x26aa394eea5630e07c48ae0c9558cef7df1daeb8986837f21cc5d17596bb78d1"
    },
    {
      "name": "system lastRuntimeUpgrade",
      "key": "0x26aa394eea5630e07c48ae0c9558cef7f9cce9c888469bb1a0dceaa129672ef8"
    },
    {
      "name": "system number",
      "key": "0x26aa394eea5630e07c48ae0c9558cef702a5c1b19ab7a04f536c519aca4983ac"
    },
    {
      "name": "system palletVersion",
      "key": "0x26aa394eea5630e07c48ae0c9558cef74e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "system parentHash",
      "key": "0x26aa394eea5630e07c48ae0c9558cef78a42f33323cb5ced3b44dd825fda9fcc"
    },
    {
      "name": "system upgradedToTripleRefCount",
      "key": "0x26aa394eea5630e07c48ae0c9558cef7a7fd6c28836b9a28522dc924110cf439"
    },
    {
      "name": "system upgradedToU32RefCount",
      "key": "0x26aa394eea5630e07c48ae0c9558cef75684a022a34dd8bfa2baaf44f172b710"
    },
    {
      "name": "technicalCommittee members",
      "key": "0xed25f63942de25ac5253ba64b5eb64d1ba7fb8745735dc3be2a2c61a72c39e78"
    },
    {
      "name": "technicalCommittee palletVersion",
      "key": "0xed25f63942de25ac5253ba64b5eb64d14e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "technicalCommittee prime",
      "key": "0xed25f63942de25ac5253ba64b5eb64d1cb3136ee16886ac28a54f39e605b387a"
    },
    {
      "name": "technicalCommittee proposalCount",
      "key": "0xed25f63942de25ac5253ba64b5eb64d16254e9d55588784fa2a62b726696e2b1"
    },
    {
      "name": "technicalCommittee proposalOf",
      "key": "0xed25f63942de25ac5253ba64b5eb64d1e9d6db8868a37d79930bc3f7f33950d1"
    },
    {
      "name": "technicalCommittee proposals",
      "key": "0xed25f63942de25ac5253ba64b5eb64d188c2f7188c6fdd1dffae2fa0d171f440"
    },
    {
      "name": "technicalCommittee voting",
      "key": "0xed25f63942de25ac5253ba64b5eb64d171cd3068e6118bfb392b798317f63a89"
    },
    {
      "name": "technicalMembership members",
      "key": "0x3a2d6c9353500637d8f8e3e0fa0bb1c5ba7fb8745735dc3be2a2c61a72c39e78"
    },
    {
      "name": "technicalMembership palletVersion",
      "key": "0x3a2d6c9353500637d8f8e3e0fa0bb1c54e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "technicalMembership prime",
      "key": "0x3a2d6c9353500637d8f8e3e0fa0bb1c5cb3136ee16886ac28a54f39e605b387a"
    },
    {
      "name": "timestamp didUpdate",
      "key": "0xf0c365c3cf59d671eb72da0e7a4113c4bbd108c4899964f707fdaffb82636065"
    },
    {
      "name": "timestamp now",
      "key": "0xf0c365c3cf59d671eb72da0e7a4113c49f1f0515f462cdcf84e0f1d6045dfcbb"
    },
    {
      "name": "timestamp palletVersion",
      "key": "0xf0c365c3cf59d671eb72da0e7a4113c44e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "tips palletVersion",
      "key": "0x2c5de123c468aef7f3ac2ab3a76f87ce4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "tips reasons",
      "key": "0x2c5de123c468aef7f3ac2ab3a76f87ced834d1db4313872258a93b9fc45d488b"
    },
    {
      "name": "tips tips",
      "key": "0x2c5de123c468aef7f3ac2ab3a76f87ce2c5de123c468aef7f3ac2ab3a76f87ce"
    },
    {
      "name": "transactionPayment nextFeeMultiplier",
      "key": "0x3f1467a096bcd71a5b6a0c8155e208103f2edf3bdf381debe331ab7446addfdc"
    },
    {
      "name": "transactionPayment palletVersion",
      "key": "0x3f1467a096bcd71a5b6a0c8155e208104e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "transactionPayment storageVersion",
      "key": "0x3f1467a096bcd71a5b6a0c8155e20810308ce9615de0775a82f8a94dc3d285a1"
    },
    {
      "name": "treasury approvals",
      "key": "0x89d139e01a5eb2256f222e5fc5dbe6b33c9c1284130706f5aea0c8b3d4c54d89"
    },
    {
      "name": "treasury palletVersion",
      "key": "0x89d139e01a5eb2256f222e5fc5dbe6b34e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "treasury proposalCount",
      "key": "0x89d139e01a5eb2256f222e5fc5dbe6b36254e9d55588784fa2a62b726696e2b1"
    },
    {
      "name": "treasury proposals",
      "key": "0x89d139e01a5eb2256f222e5fc5dbe6b388c2f7188c6fdd1dffae2fa0d171f440"
    },
    {
      "name": "ump needsDispatch",
      "key": "0xf5207f03cfdce586301014700e2c2593eec2d17a76153ff51817f12d9cfc3c7f"
    },
    {
      "name": "ump nextDispatchRoundStartWith",
      "key": "0xf5207f03cfdce586301014700e2c25937c315932673d90de4f2672ef9a7fd114"
    },
    {
      "name": "ump overweight",
      "key": "0xf5207f03cfdce586301014700e2c25930f923ef3252d0166429d36d20ed665a8"
    },
    {
      "name": "ump overweightCount",
      "key": "0xf5207f03cfdce586301014700e2c25936d9ef3b78afddab7f5c7142131132ad4"
    },
    {
      "name": "ump palletVersion",
      "key": "0xf5207f03cfdce586301014700e2c25934e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "ump relayDispatchQueues",
      "key": "0xf5207f03cfdce586301014700e2c2593d08d74c180ecda5e5c3eca040c1f4fdd"
    },
    {
      "name": "ump relayDispatchQueueSize",
      "key": "0xf5207f03cfdce586301014700e2c2593fad157e461d71fd4c1f936839a5f1f3e"
    },
    {
      "name": "uniques account",
      "key": "0x5e8a19e3cd1b7c148b33880c479c0281b99d880ec681799c0cf30e8886371da9"
    },
    {
      "name": "uniques asset",
      "key": "0x5e8a19e3cd1b7c148b33880c479c0281d34371a193a751eea5883e9553457b2e"
    },
    {
      "name": "uniques attribute",
      "key": "0x5e8a19e3cd1b7c148b33880c479c02811b0014ebdc1a24fd6a03320d070a5d84"
    },
    {
      "name": "uniques class",
      "key": "0x5e8a19e3cd1b7c148b33880c479c028122f224bb127609e7cebd7d411456bd96"
    },
    {
      "name": "uniques classAccount",
      "key": "0x5e8a19e3cd1b7c148b33880c479c02810767a4abad391f2ac82392050ba4431e"
    },
    {
      "name": "uniques classMetadataOf",
      "key": "0x5e8a19e3cd1b7c148b33880c479c02817de7f924bd3728c29f858dbd4c8ddb89"
    },
    {
      "name": "uniques instanceMetadataOf",
      "key": "0x5e8a19e3cd1b7c148b33880c479c02819a8dc5b2c03b70e90784d1e133050146"
    },
    {
      "name": "uniques ownershipAcceptance",
      "key": "0x5e8a19e3cd1b7c148b33880c479c02819a7a758387160bdc1c5ff9d2dd78ac3b"
    },
    {
      "name": "uniques palletVersion",
      "key": "0x5e8a19e3cd1b7c148b33880c479c02814e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "validatorManager palletVersion",
      "key": "0x084e7f70a295a190e2e33fd3f8cdfcc24e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "validatorManager validatorsToAdd",
      "key": "0x084e7f70a295a190e2e33fd3f8cdfcc2ecdaedbe4667f2b6d71b04cb99a12829"
    },
    {
      "name": "validatorManager validatorsToRetire",
      "key": "0x084e7f70a295a190e2e33fd3f8cdfcc2b664fa73499821e43a617aa0e82b17b1"
    },
    {
      "name": "vesting palletVersion",
      "key": "0x5f27b51b5ec208ee9cb25b55d87282434e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "vesting storageVersion",
      "key": "0x5f27b51b5ec208ee9cb25b55d8728243308ce9615de0775a82f8a94dc3d285a1"
    },
    {
      "name": "vesting vesting",
      "key": "0x5f27b51b5ec208ee9cb25b55d87282435f27b51b5ec208ee9cb25b55d8728243"
    },
    {
      "name": "xcmPallet assetTraps",
      "key": "0x1405f2411d0af5a7ff397e7c9dc68d19d499693d59a5a8e17fe4824942a77f46"
    },
    {
      "name": "xcmPallet currentMigration",
      "key": "0x1405f2411d0af5a7ff397e7c9dc68d19ccd77ccc2ae2622977ad8c5852b900f0"
    },
    {
      "name": "xcmPallet palletVersion",
      "key": "0x1405f2411d0af5a7ff397e7c9dc68d194e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "xcmPallet queries",
      "key": "0x1405f2411d0af5a7ff397e7c9dc68d197a5ad396bc2564b37426d15eb837c250"
    },
    {
      "name": "xcmPallet queryCounter",
      "key": "0x1405f2411d0af5a7ff397e7c9dc68d1982108f7b0ed56319a6fe5001d542b7a5"
    },
    {
      "name": "xcmPallet safeXcmVersion",
      "key": "0x1405f2411d0af5a7ff397e7c9dc68d196323ae84c43568be0d1394d5d0d522c4"
    },
    {
      "name": "xcmPallet supportedVersion",
      "key": "0x1405f2411d0af5a7ff397e7c9dc68d19908b4dae59e7d658f23d261c5e5db22b"
    },
    {
      "name": "xcmPallet versionDiscoveryQueue",
      "key": "0x1405f2411d0af5a7ff397e7c9dc68d194a222ba0333561192e474c59ed8e30e1"
    },
    {
      "name": "xcmPallet versionNotifiers",
      "key": "0x1405f2411d0af5a7ff397e7c9dc68d19db8f48f20e9ff76107a081bb8a607cd5"
    },
    {
      "name": "xcmPallet versionNotifyTargets",
      "key": "0x1405f2411d0af5a7ff397e7c9dc68d19d8371c747517151d863f926f819718df"
    },
    {
      "name": "xcmpQueue inboundXcmpMessages",
      "key": "0x7b3237373ffdfeb1cab4222e3b520d6bedc49980ba3aa32b0a189290fd036649"
    },
    {
      "name": "xcmpQueue inboundXcmpStatus",
      "key": "0x7b3237373ffdfeb1cab4222e3b520d6b345d8e88afa015075c945637c07e8f20"
    },
    {
      "name": "xcmpQueue outboundXcmpMessages",
      "key": "0x7b3237373ffdfeb1cab4222e3b520d6b99ffefce211776474aa1922a2bff2a15"
    },
    {
      "name": "xcmpQueue outboundXcmpStatus",
      "key": "0x7b3237373ffdfeb1cab4222e3b520d6bdf75c63fad9e3ff676422ca99d3425cf"
    },
    {
      "name": "xcmpQueue overweight",
      "key": "0x7b3237373ffdfeb1cab4222e3b520d6b0f923ef3252d0166429d36d20ed665a8"
    },
    {
      "name": "xcmpQueue overweightCount",
      "key": "0x7b3237373ffdfeb1cab4222e3b520d6b6d9ef3b78afddab7f5c7142131132ad4"
    },
    {
      "name": "xcmpQueue palletVersion",
      "key": "0x7b3237373ffdfeb1cab4222e3b520d6b4e7b9012096b41c4eb3aaf947f6ea429"
    },
    {
      "name": "xcmpQueue queueConfig",
      "key": "0x7b3237373ffdfeb1cab4222e3b520d6b4fb7683ad1cdb82c8c0b2d1c32f379c8"
    },
    {
      "name": "xcmpQueue queueSuspended",
      "key": "0x7b3237373ffdfeb1cab4222e3b520d6beaf9640e071f3fec39ccdae8e7e5ae2b"
    },
    {
      "name": "xcmpQueue signalMessages",
      "key": "0x7b3237373ffdfeb1cab4222e3b520d6bf662caaa8bb00e48d3650a5212784a20"
    }
];

module.exports = {
    METH,
}