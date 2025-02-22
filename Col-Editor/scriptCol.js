      const localization = [
        {
          mnu: "Menu",
          home: "Home",
          pckstudio: "PCK Studio",
          arcstudio: "ARC Studio",
          fuistudio: "FUI Studio",
          msscmpstudio: "MSSCMP Studio",
          texturetool: "Texture Builder Tool",
          coleditor: "COL Editor",
          arcstudio1: "COL Editor",
          arcstudio2: "COL Editor",
          Reverseengineeringtut: "Reverse Engineering",
          about: "About.",
          aboutdesc: "Throughout my years as a Modder for Minecraft on the legacy consoles, I've learned much about the game itself as well as the consoles it runs on, because of this, combined with the fact that many creators have stopped modding either on legacy consoles, or completely, I have made it my mission to make tools that are both open source, and easy to use, to allow anyone, no matter how new, to dive in head first and make incredible mods.",
          pckstudio3: "PCK Studio",
          arcstudio3: "ARC Studio",
          msscmpstudio3: "MSSCMP Studio",
          texturetool3: "Texture Builder Tool",
          Reverseengineeringtut2: "Introduction to reverse engineering.",
          scocialmedia: "Social Media",
		  filetypes: "File Types",
          download: "DOWNLOAD",
          source: "SOURCE",
        },
        {
          mnu: "メニュー",
          home: "ホームホーム",
          pckstudio: "PCKスタジオ",
          arcstudio: "ARCスタジオ",
          fuistudio: "FUIスタジオ",
          msscmpstudio: "MSSCMPスタジオ",
          texturetool: "テクスチャビルダーツール",
          coleditor: "COLエディター",
          arcstudio1: "COLエディター",
          arcstudio2: "COLエディター",
          Reverseengineeringtut: "リバースエンジニアリング",
          arcstudio2desc: "新しい世界、あなた自身のデザインの新しい世界に足を踏み入れてください。 ARC Studioを使用すると、テキストだけでなくGUI、構造を完全に制御できます。コミュニティで作成されたFUI、LOC、および構造を大量にダウンロードしますか？ これで、私のFUI、LOC、およびNBTセンターを使用できるようになりました。 ARCスタジオをダウンロードすることで、ランダムなツールをダウンロードするだけでなく、人生の次の章を開始できます。 発見、研究、そして友人や敵との楽しみに満ちた章！ 4J Studiosによって設定された制限に制約されることはなくなりますが、自分で作成したパスを作成します。このパスでは、必要に応じて実行することができます。",
		  about: "約",
          aboutdesc: "レガシーコンソールでMinecraftのModderとして働いていた数年間、ゲーム自体とそれが実行されるコンソールについて多くのことを学びました。これは、多くのクリエイターがレガシーコンソールでの改造をやめたという事実と相まって、 または完全に、私はオープンソースで使いやすいツールを作成することを使命としており、どんなに新しくても、誰もが最初に頭に飛び込んで信じられないほどの改造を行うことができます。",
          pckstudio3: "PCKスタジオ",
          arcstudio3: "ARCスタジオ",
          msscmpstudio3: "MSSCMPスタジオ",
          texturetool3: "テクスチャビルダーツール",
          Reverseengineeringtut2: "リバースエンジニアリング入門。",
          scocialmedia: "ソーシャルメディア",
		  filetypes: "ファイルタイプ",
          download: "ダウンロード",
          source: "ソース",
        },
      ];

      const mnu = document.getElementById("mnu");
      const home = document.getElementById("home");
      const pckstudio = document.getElementById("pckstudio");
      const arcstudio = document.getElementById("arcstudio");
      const fuistudio = document.getElementById("fuistudio");
      const msscmpstudio = document.getElementById("msscmpstudio");
      const texturetool = document.getElementById("texturetool");
      const arcstudio2 = document.getElementById("arcstudio2");
      const arcstudio1 = document.getElementById("arcstudio1");
      const coleditor = document.getElementById("coleditor");
      const Reverseengineeringtut = document.getElementById("Reverseengineeringtut");
      const about = document.getElementById("about");
      const aboutdesc = document.getElementById("aboutdesc");
      const pckstudio3 = document.getElementById("pckstudio3");
      const arcstudio3 = document.getElementById("arcstudio3");
      const msscmpstudio3 = document.getElementById("msscmpstudio3");
      const texturetool3 = document.getElementById("texturetool3");
      const Reverseengineeringtut2 = document.getElementById("Reverseengineeringtut2");
      const scocialmedia = document.getElementById("scocialmedia");

      const filetypes = document.getElementById("filetypes");
      const download = document.getElementById("download");
      const source = document.getElementById("source");
      const textElements = [mnu, home, pckstudio, arcstudio, fuistudio, msscmpstudio, texturetool, arcstudio2, arcstudio1, coleditor, Reverseengineeringtut, about, aboutdesc, pckstudio3, arcstudio3, 
	  msscmpstudio3, texturetool3, Reverseengineeringtut2, scocialmedia, filetypes, download, source];


		console.log(document.getElementById("arcstudio2"));
      let local = document.getElementById("locale");

      let currentLang = null;
      local.addEventListener("change", function () {
        switch (this.value) {
          case "en":
            currentLang = 0;
            break;
          case "jp":
            currentLang = 1;
            break;
          default:
            currentLang = 0;
        }

        textElements.forEach(function (el) {
          let prop = el.getAttribute("id");
          el.innerHTML = localization[currentLang][prop];
        });
      });