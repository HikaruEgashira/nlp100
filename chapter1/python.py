#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# 00. 文字列の逆順文字列
#
# "stressed"の文字を逆に（末尾から先頭に向かって）並べた文字列を得よ．
#
print("stressed"[::-1])

#
# 01.「パタトクカシーー」
#
# 「パタトクカシーー」という文字列の1, 3, 5, 7文字目を取り出して連結した文字列を得よ．
#
print("パタトクカシーー"[1::2])

#
# 02.「パトカー」＋「タクシー」＝「パタトクカシーー」
#
# 「パトカー」＋「タクシー」の文字を先頭から交互に連結して
# 文字列「パタトクカシーー」を得よ．
#
a = "パトカー"
b = "タクシー"
res = ""
for charA, charB in zip(list(a), list(b)):
    res += charA + charB
print(res)

#
# 03. 円周率
#
# Now I need a drink, alcoholic of course,  --after the heavy lectures involving quantum mechanics.
# という文を単語に分解し，各単語の（アルファベットの）文字数を
# 先頭から出現順に並べたリストを作成せよ．
#
text = "Now I need a drink, alcoholic of course,  --after the heavy lectures involving quantum mechanics."
print(list(map(lambda x: len(x), text.split())))