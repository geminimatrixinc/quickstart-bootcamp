
// The e.preventDefault() method stops the default action of an event, like submitting a form or navigating to a link.

const PreventDefaultExample = () => {


    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents form submission
        
        alert('Form submission prevented');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type something" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default PreventDefaultExample;
