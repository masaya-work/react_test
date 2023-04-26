import { CssModules } from "./components/CssModules";
import { ColorMessages } from "./components/colorMessage";
import { useState } from "react";
import { useEffect } from "react";

export const App = () => {
    // State定義
    const [num, setNum] = useState(0); //numは状態を持った変数、setNumはそれを更新する関数
    console.log("レンダリング")
    const onClickButton = () => {
        // alert(1 + 1);
        // setNum(num + 1); state表示
        // setNum((prev) => num + 1); 関数setNumを実行し、変数numに+1して返す
        // setNum((prev) => { prev + 1 });setNumの中にアロー関数（単一なので括弧は省略可能）バージョン
        setNum(prev => { //setNumの中にアロー関数（省略可能しない）バージョン（正しい書き方）。引数「prev」にはstateが更新される前の値（0）が送られる仕組みになっている。
            return prev + 1;
        });
    }
    // const contentStyle = {  ColorMessages.jsxに移動し動的に作る
    //     color: "blue",
    //     fontSize: "20px" //jsのプロパティ名にハイフン「-」は使えない
    // }

    // ↓ある値が変わったら、ある処理を行う
    useEffect(() => { //useEffectの中に無名関数
        alert("useEffect"); //処理はアロー関数で第一引数に入れる
    }, [num]);//条件は第二引数に配列で入れる

    const contentPinkStyle = {
        color: "pink",
        fontSize: "20px"
    }
    // return <h1>こんにちは！</h1>;
    return (
        <>
            {/* この中ではjavascriptの記述も可能 */}
            {console.log("aaa")}
            <h1 style={{ color: "red" }}> こんにちは！</h1>
            {/* <ColorMessages />colorMessage.jsxの内容表示するだけならこれだけでもOK */}
            {/* <ColorMessages color="aqua" message="お元気？" />//messageで動的に変更パターン */}
            <ColorMessages color="aqua">元気ですか？{/* //childrenで動的に変更パターン（タグも入れられる） */}
                <div>
                    <p>テスト</p>
                </div>
            </ColorMessages>
            <p style={contentPinkStyle}> 元気です！</p>
            <button onClick={onClickButton}>ボタン</button>
            <p>
                {num}{/*state処理済みの状態を持っている変数numを表示*/}
            </p>

            <CssModules />
        </>
    );
};


