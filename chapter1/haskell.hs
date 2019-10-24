-- | exec
--
main :: IO()
main = do
    scr_reverse
    scr_index
    scr_concat
    scr_count

-- | util
--
title :: String -> IO ()
title = putStrLn
p :: String -> IO ()
p text = putStrLn $ "  " ++ text

-- | 00. 文字列の逆順
--
-- 文字列"stressed"の文字を逆に（末尾から先頭に向かって）並べた文字列を得よ．
--
scr_reverse :: IO()
scr_reverse = do
    title "001"
    p $ reverse $ "stressed"

-- | 01. 「パタトクカシーー」
--
-- 「パタトクカシーー」という文字列の1,3,5,7文字目を取り出して連結した文字列を得よ．
--
scr_index :: IO()
scr_index = do
    title "002"
    p $ map (\x -> "パタトクカシーー" !! x) [1, 3, 5, 7]

-- | 02. 「パトカー」＋「タクシー」＝「パタトクカシーー」
--
-- パトカー」＋「タクシー」の文字を先頭から交互に連結して
-- 文字列「パタトクカシーー」を得よ．
--
scr_concat :: IO()
scr_concat = do
    title "003"
    p $ "TODO"

-- | 03. 円周率
--
-- Now I need a drink, alcoholic of course,
-- after the heavy lectures involving quantum mechanics.
--
-- という文を単語に分解し，各単語の（アルファベットの）文字数を
-- 先頭から出現順に並べたリストを作成せよ．
--
scr_count :: IO()
scr_count = do
    title "004"
    p $ "TODO"