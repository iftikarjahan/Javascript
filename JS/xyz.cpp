#include<bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin>>n;

    int myArray[n];
    for(int i=0;i<n;i++){
        cin>>myArray[i];
    }

    for(int i=0;i<n;i++){
        int ns=myArray[i];
        for(int i=0;i<ns;i++){
            cout<<"*"<<endl;
        }
        cout<<"\t";
    }

    
    return 0;
}