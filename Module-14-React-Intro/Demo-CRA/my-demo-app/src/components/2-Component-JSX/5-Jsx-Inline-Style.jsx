
//  Using Inline Styles
// Inline styles are written as JavaScript objects.

function JsxInlineStyle() {

    const boxStyle = {
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '8px',
    };

    return <div style={boxStyle}>This box has inline styling!</div>;
}

export default JsxInlineStyle;
