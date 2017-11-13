public void timTatCaChuTrinhHamiltonCuaDoThi(int j){
    for(int k=0;k<soDinh; k++){
        if(b[k]==0&&maTran[c[j-1]][k]>0){
            b[k]=1;
            c[j]=k;
        if(j==soDinh-1){
            System.out.println(Arrays.toString(c));
        }else{
            timTatCaChuTrinhHamiltonCuaDoThi(j+1);
        }
            b[k]=0;
        }
    }
}