package chuong4;

import java.util.Stack;

public class Tree {
    public int[][] maxTrixT;
    public int soDinh;
    private int soCanh;
    private boolean[] vis;
    int[][] a;

    public Tree(int soDinh) {
        this.soDinh = soDinh;
        vis = new boolean[soDinh];
        maxTrixT = new int[soDinh][soDinh];
        for (int i = 0; i < soDinh; i++) {
            for (int j = 0; j < soDinh; j++) {
                maxTrixT[i][j] = 999;
            }
        }
        a = new int[soDinh][soDinh];
        for (int i = 0; i < soDinh; i++) {
            for (int j = 0; j < soDinh; j++) {
                a[i][j] = maxTrixT[i][j];
            }
        }
    }

    public int getSoCanh() {
        return soCanh;
    }

    public void themCanh(int u, int v, int w) {
        maxTrixT[u][v] = w;
        maxTrixT[v][u] = w;
        this.soCanh++;
    }

    public void xoaCanh(int u, int v, int w) {
        maxTrixT[u][v] = w;
        maxTrixT[v][u] = w;
        this.soCanh--;
    }

    public int[][] getMaTrix() {
        return maxTrixT;
    }

    public String toStringMatrix() {
        StringBuilder s = new StringBuilder();
        for (int i = 0; i < getSoDinh(); i++) {
            for (int j = 0; j < getSoDinh(); j++) {
                s.append(maxTrixT[i][j] + "\t");
            }
            s.append("\n");
        }
        return s.toString();
    }

    public void toStringMatrix2() {
        for (int i = 0; i < getSoDinh(); i++) {
            for (int j = 0; j < getSoDinh(); j++) {
                if (maxTrixT[i][j] != 999) {
                    System.out.print(i + "\t" + j + " co trong so la: " + maxTrixT[i][j]+"\t\t");
                }
            }
            System.out.println();
        }
    }


    public boolean kt(int a) {
        int[][] matrix1 = new int[maxTrixT.length][maxTrixT.length];
        for (int i = 0; i < matrix1.length; i++) {
            for (int j = 0; j < matrix1.length; j++) {
                matrix1[i][j] = maxTrixT[i][j];
            }
        }
        boolean[] tham = new boolean[maxTrixT[0].length];
        Stack<Integer> stack = new Stack<>();
        stack.push(a);
        while (!stack.empty()) {
            a = stack.pop();
            tham[a] = true;
            for (int i = 0; i < matrix1.length; i++) {
                if (matrix1[a][i] < 999 && !stack.contains(i)) {
                    if (!tham[i]) {
                        //thăm rùi xóa
                        stack.push(i);
                        matrix1[a][i] = 999;
                        matrix1[i][a] = 999;
                    } else
                        //gặp lại đỉnh đã thăm thì dừng
                        return true;

                }
            }
        }
        return false;
    }


    public int getSoDinh() {
        return soDinh;
    }


    public boolean coPhaiLaCayHayKhong() {
        return soCanh == soDinh - 1;
    }

    public int doLechTamCua1Dinh() {
        return 0;
    }

    public int banKinh() {
        return 0;
    }

    public int[] cacTamCuaCay() {
        return null;
    }

    public static void main(String[] args) {
        Tree tree = new Tree(9);
        tree.themCanh(8, 6, 1);
        tree.themCanh(0, 5, 3);
        tree.themCanh(2, 3, 4);
        tree.themCanh(4, 6, 5);
        tree.themCanh(3, 4, 6);
        tree.themCanh(1, 5, 7);
        tree.themCanh(1, 2, 9);
        tree.themCanh(6, 7, 11);
        tree.themCanh(5, 6, 10);
//        System.out.println(tree.kt(6));
    }
}
