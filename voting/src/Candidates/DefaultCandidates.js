const DefaultCandidates = () => {
    const val = '[{"Id":"f111a8d-2c14-6842-b1a6-1c577a6767","Name":"Bernie Sanders","Age":"80","Party":"Democratic","ImageUrl":"https://cdn.britannica.com/51/132851-050-D6CA13B6/Bernie-Sanders-2007.jpg"},{"Id":"74be5ca-2e23-16e0-2612-5ac3c475f6f","Name":"Donald Trump","Age":"75","Party":"Republican","ImageUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg"},{"Id":"1a10585-6883-5ccd-580-6fd8ab31dfa","Name":"Hillary Clinton","Age":"74","Party":"Democratic","ImageUrl":"https://wp.las.iastate.edu/cattcenter-v2/wp-content/uploads/sites/218/2015/03/clinton.jpg"},{"Id":"11e5-e55d-5c4-34b-a2cbbef1f01","Name":"Barrack Obama","Age":"60","Party":"Democratic","ImageUrl":"https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg"},{"Id":"dc3323-434e-22a3-ae0-c3de4b67bfd1","Name":"Joe Biden","Age":"79","Party":"Democratic","ImageUrl":"https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg"}]';
    return JSON.parse(val);
}

export default DefaultCandidates;