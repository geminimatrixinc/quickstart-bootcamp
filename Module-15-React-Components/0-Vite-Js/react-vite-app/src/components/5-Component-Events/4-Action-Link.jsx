
const ActionLink = () => {

    // event handling the hyper link click..
    // synthetic event object is available
    function handleLinkClick (event) {

        debugger
        console.log(event)
        // event is a synthetic event object
        // prevent the default action of the link
        // which is to navigate to the link URL
        event.preventDefault();

        window.alert(`Hey, Don't Leave!!`)

        /// ===>  redirect from react router..
    }

    return <>
        <a href="http://www.meta.com" onClick={handleLinkClick}>Click for Meta</a>
    </>;
}

export default ActionLink;