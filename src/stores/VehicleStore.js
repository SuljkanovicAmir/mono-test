import { observable, runInAction, makeAutoObservable} from "mobx";
import VehicleService from "./VehicleService";


class VehicleStore {

    constructor(){
        this.vehicleService = new VehicleService()
        makeAutoObservable(this, {
            vehicleData: observable,
            status: observable,
            searchQuery: observable,
            sortBy: observable,
            pageNumber: observable
        })
    }
    vehicleData = []
    status = "initial";
    searchQuery = null;
    pageNumber = 1
    totalRecords = 0;
    sortBy = "name|asc"


    getVehicles = async () => {
        try {
            let params = {
                rpp: 9
            }
            if (this.sortBy) {
                params.sort = this.sortBy
            }
            if (this.pageNumber) {
                params.page = this.pageNumber
            }
            if (this.searchQuery) {
                params.searchQuery = this.searchQuery
            }
           

            const urlParams = new URLSearchParams(Object.entries(params));
            const data = await this.vehicleService.get(urlParams)
        runInAction(() => {
            this.vehicleData = data.item;
            this.totalRecords = data.totalRecords
        })
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
            console.log(error)
        }
        
    };


    addVehicle = async (model) => {

        try {
            const response = await this.vehicleService.post(model);
            const data = this.getVehicles()
            console.log(data)
            if (response === 201) {
                runInAction(() => {
                    this.vehicleData = this.vehicleData.map(item => [...item, data.item])
                    this.status = 'success'
                })
            }
        }  catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };

    updateVehicle = async (params, vehicle) => {
        try {
            const response = await this.vehicleService.put(params, vehicle)
            const data = this.getVehicles()
            if (response === 201) {
                runInAction(() => {
                    this.status = 'success'
                    this.vehicleData = this.vehicleDatamap(item => item.id === params ? data : item)
                })
            }
        }  catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };

    deleteVehicle = async (id) => {
        try {
            const response = await this.vehicleService.delete(id);
            if (response.status === 204) {
                runInAction(() => {
                    this.vehicleData = this.vehicleData.filter(item => item.id !== id)
                    this.status = "success";
                })
            } 
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }

    get totalPages() {
       return Math.ceil(this.totalRecords / 9);
    }

  
   
}




export default new VehicleStore()