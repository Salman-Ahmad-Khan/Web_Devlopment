#include<iostream>
using namespace std;

int main()
{

int t_sec=0,hh=0,mm=0;

t_sec=8247;
hh=t_sec/3600;
t_sec=t_sec%3600;
mm=t_sec/60;
t_sec=t_sec%60;

cout<<hh<<endl<<mm<<endl<<t_sec;


    return 0;
}