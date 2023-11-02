#include<iostream>
using namespace std;

int foo2(int a) {
    return a+3;
}

extern "C"
{
    int cfoo2(int a) {
        return foo2(a);
    }
}