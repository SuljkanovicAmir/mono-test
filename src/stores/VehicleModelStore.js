import { observable, runInAction, makeAutoObservable} from "mobx";
import VehicleModelService from "./VehicleModelService";


class VehicleModelStore {

    constructor(){
        this.vehicleModelService = new VehicleModelService()
        makeAutoObservable(this, {
            vehicleModelData: observable,
            status: observable,
            searchQuery: observable,
            sortBy: observable,
            pageNumber: observable
        })
    }
    vehicleModelData = []
    status = "initial";
    searchQuery = null;
    pageNumber = 1
    totalRecords = 0;
    sortBy = "name|asc"


    getVehicleModels = async () => {
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
            const data = await this.vehicleModelService.get(urlParams)
            console.log(data)
        runInAction(() => {
            this.vehicleModelData = data.item;
            this.totalRecords = data.totalRecords
        })
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
            console.log(error)
        }
        
    };


    addVehicleModel = async (model) => {

        try {
            const response = await this.vehicleModelService.post(model);
            const data = this.getVehicleModels()
            console.log(data)
            if (response === 201) {
                runInAction(() => {
                    this.vehicleModelData = this.vehicleModelData.map(item => [...item, data.item])
                    this.status = 'success'
                })
            }
        }  catch (error) {
            runInAction(() => {
                this.status = "error";
                console.log(error)
            });
        }
    };

    updateVehicleModel = async (params, vehicle) => {
        try {
            const response = await this.vehicleModelService.put(params, vehicle)
            const data = this.getVehicleModels()
            if (response === 201) {
                runInAction(() => {
                    this.status = 'success'
                    this.vehicleModelData = this.vehicleModelDatamap(item => item.id === params ? data : item)
                })
            }
        }  catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };

    deleteVehicleModel = async (id) => {
        try {
            const response = await this.vehicleModelService.delete(id);
            if (response.status === 204) {
                runInAction(() => {
                    this.vehicleModelData = this.vehicleModelData.filter(item => item.id !== id)
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




export default new VehicleModelStore()