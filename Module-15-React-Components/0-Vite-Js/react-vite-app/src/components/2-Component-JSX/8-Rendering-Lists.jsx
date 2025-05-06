// Rendering Lists
// You can render lists of elements using the map() function:

// 1. map() is used to iterate over the array of names.
// 2. key is a special attribute that helps React keep track of elements during rendering and updates.

function NameList() {
    const names = ['Alice', 'Bob', 'Charlie'];

    return (
        <ul>
            { 
                names.map((name) => (
                    <li key={name}>{name}</li>
                ))
            }
        </ul>
    );
}

export default NameList;
