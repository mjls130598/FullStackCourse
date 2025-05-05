const Filter = ({filter, setFilter}) => {
    
    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value)
    }

    return (
        <form>
            <div>
                filter shown with: <input value={filter} onChange={handleFilterChange}/>
            </div>
        </form>
    )
}

export default Filter