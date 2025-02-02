---
title: 为什么我提供流动性失败？
sidebar_position: 4
date: 2021-08-15 22:33:07
---

import { Improvement, } from "@site/src/components/admonitions";

<Improvement />


流动性注入失败的常见原因是超额滑点。 请刷新页面以获取交易对的最新数据。

在注入流动性时，有一个非常重要的原则：注入行为不应改变交易对的当前价格。

因此，在注入流动性时也存在滑点的概念。 在注入流动性时，流动性池中资产的比例因他人的交易行为而发生变化，或者从更一般意义上讲，流动池的价格因交易而发生变化。 大幅变化： 注入资产与当前流动资金池比例存在差异。 如果差额超过一定比例，流动性注入将会失败。 这就是，超额滑点。

还有一种情况注入失败是，注入的两种资产太小，无法获得最小数量的LP份额。 这也将导致注入流动性失败。

如果您遇到其他在交易中导致交易失败的情况，请联系我们的社区经理Chris (ID: 37160854)，或者在Pando Lake官方社群(ID: 7000103578)提问。