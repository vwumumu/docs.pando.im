---
title: Lake API Übersicht
sidebar_position: 1
date: 30-09-2021 23:18:01
---

Pando Lake und 4swap bieten die einfache entwicklerfreundliche APIs für die Drittanbieter-Entwickler.

## API-Endpunkte

| Name        | Endpunkt                        |
| ----------- | ------------------------------- |
| Primär      | https://api.4swap.org/api       |
| Alternative | https://mtgswap-api.fox.one/api |

Sie können alle folgenden Formen für Ihre API-Anfragen verwenden:

```
HTTP_METHOD ${API_BASE}/${API_PATH}
```

## Geschäftsobjekte

Einige Objekte werden in den API-Antworten häufig verwendet.

### Ein paar Objekte

```json
{
  // the asset id of base and quote assets
  "base_asset_id": "c94ac88f-4671-3976-b60a-09064f1811e8",
  "quote_asset_id": "f5ef6b5d-cc5a-3d90-b2c0-a2fd386e7a3c",
  // the amount of base and quote assets
  "base_amount": "827.7243632",
  "quote_amount": "57701.51287515",
  // the liquidity of this pair
  "liquidity": "6588.04146863",
  // the asset id of LP-Token of this pair
  "liquidity_asset_id": "b34633de-4012-38e3-88a9-1f41eafdf45a",
  // the route id of this pair
  "route_id": 1,
  // fee 0.3%
  "fee_percent": "0.003",
  "max_liquidity": "100000000",
  "base_value": "301753.29",
  "quote_value": "300856.63",
  "volume_24h": "9552.48",
  "fee_24h": "28.63",
  "transaction_count_24h": 165,
  "version": 7503628,
  "base_volume_24h": "27.23252371",
  "quote_volume_24h": "1895.88436236"
}
```

### Vermögensträger

```json
{
  // Asset-ID
  "id": "159648dc-eba7-3d0e-82ea-06995bee0537",
  // angezeigter Name, Symbol und Ikon
  "name": "4swap LP Token BTC-wBTC",
  "symbol": "sBTC-wBTC",
  "logo": "https://mixin-images.zeromesh.net/kVAd-goGIX7OAFruP_gcT04yXomO4BfTFEyeroKPl38Ypc6KQnQZBdeVzp8VCOiDyD-4-A8Wyh_HiFztViJxjrSZezrlRl6Up5SCWw=s128",
  // Asset-ID des Chain-Assets
  "chain_id": "43d61dcd-e413-450d-80b8-101d5e903357",
  // Entität des Ketten-Assets
  "chain": {Asset Entity},
  // Preis in US Dollar
  "price": "84447.541565189134",
  // zusätzliche Informationen zu diesem Asset
  "extra": {"circulation":"109542949","name":"Ethereum","explorer":"https://etherscan.io/","intro":{"en":["Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether.
 ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.","Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014 and officially launched the blockchain on July 30, 2015.","Ethereum’s own purported goal is to become a global platform for decentralized applications, allowing users from all over the world to write and run software that is resistant to censorship, downtime and fraud."]},"website":"https://www.ethereum.org/","issue":"2014/7/24","total":"109542949"}
}
```