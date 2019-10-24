reverse("stressed")
index("パタトクカシーー")
concat("パトカー", "タクシー")
count("Now I need a drink, alcoholic of course,  --after the heavy lectures involving quantum mechanics.")

/**
 * 00.文字列の逆順文字列
 *
 * "stressed"の文字を逆に（末尾から先頭に向かって）並べた文字列を得よ．
 */
function reverse(text: string) {
    const rev = text
        .split("")
        .reduce((sum, acc) => acc + sum, "")
    console.log(rev)
}

/**
 * 01.「パタトクカシーー」
 *
 * 「パタトクカシーー」という文字列の1, 3, 5, 7文字目を取り出して連結した文字列を得よ．
 */
function index(text: string) {
    const index = [1, 3, 5, 7]
    const res = index
        .map(v => text.charAt(v))
        .join("")
    console.log(res)
}

/**
 * 02.「パトカー」＋「タクシー」＝「パタトクカシーー」
 *
 * 「パトカー」＋「タクシー」の文字を先頭から交互に連結して
 * 文字列「パタトクカシーー」を得よ．
 */
function concat(a: string, b: string) {
    const res = a
        .split("")
        .reduce((sum, acc, index) => sum + acc + b.charAt(index), "")
    console.log(res)
}

/**
 * 03.円周率
 *
 * Now I need a drink, alcoholic of course,  --after the heavy lectures involving quantum mechanics.
 * という文を単語に分解し，各単語の（アルファベットの）文字数を
 * 先頭から出現順に並べたリストを作成せよ．
 */
function count(text: string) {
    const countList = text
        .split(" ")
        .filter(v => v.length > 0) // delete blank ""
        .map(v => v.length)
    console.log(countList)
}