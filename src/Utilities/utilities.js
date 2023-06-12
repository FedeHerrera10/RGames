
export const getURLApi = (filter) =>{
    let url=import.meta.env.VITE_BASE_URL+'games?';
    const{platform,genre,sortby}=filter
    
    if(platform !== "" && genre === ""){
      url=  url+`platform=${platform}&sort-by=${sortby}`
    }

    if(platform === "" && genre !== ""){
        url = url+`category=${genre}&sort-by=${sortby}`
    }

    if(platform === "" && genre === ""){
      url= url+`sort-by=${sortby}`
    }

    if(platform !== "" && genre !== ""){
        url = url+`platform=${platform}&category=${genre}&sort-by=${sortby}`
    }

    return url;
    
}

export const getFilterParam  = (path) => {
  
  if(path.length ===3){
    const valueFilter = path[2];
    return{
        platform:'',
        genre:valueFilter,
        sortby:'release-date'
    }
  }

  if(path.length ===5){
    const valueFilterPlatform = path[2];
    const valueFilter = path[4];

    return {
        platform:valueFilterPlatform,
        genre:valueFilter,
        sortby:'release-date'
    }

}}