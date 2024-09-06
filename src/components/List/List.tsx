import './List.css';
import { useState } from 'react';



const List = ({ items , onDelete }: {items: any , onDelete: any}) => {
    const [filteredItems, setFilteredItems] = useState("");
    
    
    const getselected = () => {
        const select = document.getElementById('Filtercomp') as HTMLSelectElement;
        const selected = select.value;
        const filtered = filterItems(selected);
        setFilteredItems(filtered);
        console.log(filteredItems);
        console.log(deleteItem);
        
    }

    


    const imageif = (category: string): string => {
        let img = '';
        if (category === 'Food') {
             img = "https://cdn-icons-png.flaticon.com/512/857/857681.png";
        } else if (category === 'House') {
            img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6UWplX_v2R0xM_JIjt14x2r6okrb0WxYgYg&s";
        } else {
            img = "https://static.vecteezy.com/system/resources/previews/010/148/434/non_2x/credit-card-icon-sign-symbol-design-free-png.png";
        }
        return img;
    }

    
   

    const filterItems = (selected: string) => {
        if(selected === 'all') {
            return (
                items.map((item: any, index: number) => (
                    <div className="Items" key={index}>

                        <img className="IconsImgs" src={imageif(item.category)} alt="icon" />
                        <div>
                            <h3>{item.item}</h3>
                            <p>{item.price} $</p>
                            <p>{item.date}</p>
                        </div>
                        <div className="iconsContainer">
                        <img src="https://cdn.icon-icons.com/icons2/3247/PNG/512/trash_can_icon_198505.png" alt="" height="20px"   onClick={deleteItem}  />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghdC0E9qF92kMMp8D59A--EJMK-CkwmvQCg&s" alt="" height="20px" />
                    </div>
                    </div>
                    ))
            )
    }else if (selected === 'food') {
        return (
            items.filter((item: any) => item.category === 'Food').map((item: any, index: number) => (
                <div className="Items" key={index}>

                    <img className="IconsImgs" src={imageif(item.category)} alt="icon" />
                    <div>
                        <h3>{item.item}</h3>
                        <p>{item.price} $</p>
                        <p>{item.date}</p>
                    </div>
                    <div className="iconsContainer">
                        <img src="https://cdn.icon-icons.com/icons2/3247/PNG/512/trash_can_icon_198505.png" alt=""  height="20px"  onClick={deleteItem}  />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghdC0E9qF92kMMp8D59A--EJMK-CkwmvQCg&s" alt=""   height="20px"/>
                    </div>
                </div>
                ))
        )
    } else if (selected === 'house') {
        return (
            items.filter((item: any) => item.category === 'House').map((item: any, index: number) => (
                <div className="Items" key={index}>

                    <img className="IconsImgs" src={imageif(item.category)} alt="icon" />
                    <div>
                        <h3>{item.item}</h3>
                        <p>{item.price} $</p>
                        <p>{item.date}</p>
                    </div>
                    <div className="iconsContainer">
                        <img src="https://cdn.icon-icons.com/icons2/3247/PNG/512/trash_can_icon_198505.png" alt=""  height="20px"  onClick={deleteItem}  />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghdC0E9qF92kMMp8D59A--EJMK-CkwmvQCg&s" alt=""  height="20px"/>
                    </div>
                </div>
                ))
        )
    } else if (selected === 'subscriptions') {
        return (
            items.filter((item: any) => item.category === 'Subscriptions').map((item: any, index: number) => (
                <div className="Items" key={index}>
                    
                    <img className="IconsImgs" src={imageif(item.category)} alt="icon" />
                    <div>
                        <h3>{item.item}</h3>
                        <p>{item.price} $</p>
                        <p>{item.date}</p>
                    </div>
                    <div className="iconsContainer">
                        <img src="https://cdn.icon-icons.com/icons2/3247/PNG/512/trash_can_icon_198505.png" alt=""  height="20px" onClick={deleteItem}  />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghdC0E9qF92kMMp8D59A--EJMK-CkwmvQCg&s" alt="" height="20px"/>
                    </div>
                </div>
                ))
        )
    }}

  
    const deleteItem = (index: any)=>{
        const GetIndex = index.target.parentElement.parentElement;
       const item = items
         const indexItem = item.indexOf(GetIndex);
         console.log(indexItem);
         onDelete(indexItem);
         
        
    }



    return (
        <div className="List">
            <div className="List-content">
                <div className="filter">
                    <h1>Filter your items</h1>
                    <select id="Filtercomp" name="Filter" onChange={getselected }>
                        <option value="all">All</option>
                        <option value="food">Food</option>
                        <option value="house">House</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>
                </div>
                <h2>Items</h2>
                <div className="Items-Container">

                    {filteredItems}
                
                </div>
            </div>
        </div>
    );
}

export default List;