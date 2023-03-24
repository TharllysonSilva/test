function Menu ({active, setActive, setCategory}) {
    const links = [
        {id: 1, name: "Geral", value: "geral"},
        {id: 2, name: "Negócios", value: "negocios"},
        {id: 3, name: "Entreterimento", value: "Entreterimento"},
        {id: 4, name: "Saúde", value: "saude"},
        {id: 5, name: "Ciência", value: "ciencia"},
        {id: 6, name: "Esportes", value: "esportes"},
        {id: 7, name: "Tecnologia", value: "tecnologia"},
    ]

    function onClick (id, value){
        setActive(id)
        setCategory(value)
    }
    return (
        <nav className="menu">
            <ul>
                {links.map(link => (
                    <li 
                    key={link.id}
                    className={active === link.id ? "active" : "inactive"}
                    onClick={() => onClick(link.id, link.value)}
                    >
                        
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu