---
title: "Node.jsの環境構築"
date: "2020-04-12"
description: "Gatsby Blog の作成中に連鎖的に問題にぶつかってしまった。 :)"
---

ことの始まりは、Gatsby Blog で Plugin: gatsby-transformer-remark をインストールして GatsbyBlog を
yarn develop で起動させた時だった。

どうやら X-code をインストールしなければならないという様な警告を見た。

次に、npx gatsby new gatsby-blog で初回ブログ作成時に、気付かない間に幾つか Error が表示されていた。
それが気になって、まずはそれから解決しようと思った。
しかし、それからハマってしまって、

Mac の Node の環境が nodebrew でバージョン変更できない問題にぶつかり、それを解決しようと思った。

brew uninstall nodebrew で削除しても解決しないので、Homebrew を削除して再インストールしてみた。
zsh や nodebrew 等をインストールし直した。
zshrc にパスを追加しようかと思って cat ~/.zshrc で中を確認したところ、何も記載がないのに気づいた。
おかしいと思っていたが、そのうちターミナルの zsh がおかしいことに気づき、試しに新規にターミナルを立ち上げてみたら、
zsh の設定が zprezto(pure) が適用されていない初期状態になってしまっていた。
おそらく、zsh を再インストールした際に zprezto の設定も削除してしまったらしい。

とりあえず、4/12 の午前中に zprezto を再インストールして、zsh の設定は元に戻した。
次に、node を nodebrew のみで管理するために色々と試してみた。

vagrant の ubuntu にも次の事を行った。
zprezto をインストールして、zsh の操作や見た目をよくした。
パッケージ管理の n をインストールした。
gatsby-blog を作成して、起動させてみた。
ubuntu の gatuby-blog を Mac 側のブラウザで表示するために、vagrantfile に設定をした。
ホスト OS（MAC）から クライアント OS（vagrant 内の Ubuntu）にアクセスするためにポートフォワードの設定。
しかし、結果はできなかった。現状まだできてていない。
