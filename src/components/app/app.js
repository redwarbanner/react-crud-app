import AppInfo from '../app-info/app-info';
import SearhPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import './app.css';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App (){
    const data = [
        {name: 'Jack London', salary: 800, increase: false},
        {name: 'Harry White', salary: 3000, increase: true},
        {name: 'William Black', salary: 5000, increase: false},
    ];
    return (
        <div className="app">
            <AppInfo/>

            <div className='search-panel'>
                <SearhPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data ={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;