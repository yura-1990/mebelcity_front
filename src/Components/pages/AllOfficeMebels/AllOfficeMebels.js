import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { getDataByID } from '../../../store/allOfficeMebelReducer'
import uz from '../../../lang/uz.json'
import ru from '../../../lang/ru.json'


function AllOfficeMebels({allOfficeMebel, getDataByID, curLang}) {
  return (
    <div className="container-fluid">
      <div className="row category-top mebel-list justify-content-center">
        <div className="col-12">
          {allOfficeMebel && <div className="card shadow">
            <div className="card-title text-center text-primary ">
              <h2 className="text-blue">{ curLang === "ru" ? ru['Offis mebellar toplami']: uz['Набор Оффисныx мебелов']}</h2>
            </div>
          </div>}
        </div>
          {
            allOfficeMebel?.map((el, i)=>(<div key={i} className="mt-4 col-xl-3 col-lg-4 col-sm-6 co-12  ">
              <Link to={`/mebel/allmebel/${el.id}`} onClick={()=>getDataByID(el.id)} className='bg-white rounded-3 d-flex h-100 p-3 overflow-hidden shadow'>
                <div className="d-flex flex-column justify-content-between">
                  <img className="img-fluid" src={`https://mebels.mebelcity.uz/storage/${el.image}`} alt={el.name_uz ?? el.name_ru} width="581px" height="407px" />
                    <p className="text-center m-0 mt-2">{el.name_uz}</p>
                </div>
              </Link>
            </div>))
          }
      </div>     
    </div>
  )
}

export default connect(
      ({allOfficeMebel:  {allOfficeMebel}})=>
      ({allOfficeMebel}), {getDataByID})
      (AllOfficeMebels)