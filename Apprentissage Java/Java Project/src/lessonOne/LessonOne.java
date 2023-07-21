package lessonOne;
import java.util.Scanner;

public class LessonOne {

    public static void main(String[] args) {
        Scanner saisieUtilisateur = new Scanner(System.in);
        /*
------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------Exo 3 Chat GPT-----------------------------------------------------------
        int count = 0;
        System.out.println("Veuillez saisir un premier nombre :");
        int number1 = saisieUtilisateur.nextInt();
        count+=1;
        System.out.println("Veuillez saisir un deuxieme nombre :");
        int number2 = saisieUtilisateur.nextInt();
        count+=1;
        System.out.println("Veuillez saisir un troisieme nombre :");
        int number3 = saisieUtilisateur.nextInt();
        count+=1;
        System.out.println("La moyenne de vos nombres donne : "+ (float)(number1+number2+number3)/count);
-----------------------------------------------Exo 3 Chat GPT-----------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
        */
        /*
------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------Exo 4 Chat GPT-----------------------------------------------------------

        System.out.println("Veuillez saisir un premier nombre :");
        float number1 = saisieUtilisateur.nextInt();
        if ((number1%2)==0){
            System.out.println("Ce nombre est pair.");
        }else{
            System.out.println("Ce nombre est impair.");
        }

-----------------------------------------------Exo 4 Chat GPT-----------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
         */
        /*
------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------Exo 5 Chat GPT-----------------------------------------------------------


        for (int i = 1;i<=10;i++){
            System.out.println(i);
        }

-----------------------------------------------Exo 5 Chat GPT-----------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
         */
        /*
------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------Exo 6 Chat GPT-----------------------------------------------------------

        System.out.println("Veuillez saisir un nombre a calculer le factoriel :");
        float number = saisieUtilisateur.nextInt();
        int factorial = 1;
        for (int i = 1; i <= number; i++) {
            factorial *= i;
        }
        System.out.println("Le factoriel de " + number + " est : " + factorial);

-----------------------------------------------Exo 6 Chat GPT-----------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
        */
        /*
------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------Exo 7 Chat GPT-----------------------------------------------------------

        System.out.println("Veuillez saisir un nombre pour savoir si il est premier :");
        float number = saisieUtilisateur.nextInt();
        boolean isPrime = true;
        for (int i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            System.out.println("Ce nombre est un nombre premier.");
        } else {
            System.out.println("Ce nombre n'est pas un nombre premier.");
        }

-----------------------------------------------Exo 7 Chat GPT-----------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
        */
        /*
------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------Exo 8 Chat GPT-----------------------------------------------------------

        System.out.println("Veuillez saisir une chaine de caractere a inverser :");
        String text = saisieUtilisateur.nextLine();
        int taille = text.length();
        String output= "";
        for(int i = 0;i<text.length();i++){
            output += text.charAt((taille -i)-1);
        }
        System.out.println(output);

-----------------------------------------------Exo 8 Chat GPT-----------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
        */
        /*
------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------Exo 8 Chat GPT-----------------------------------------------------------
        */
        System.out.println("Veuillez saisir une chaine de caractere :");
        String text = saisieUtilisateur.nextLine();
        System.out.println("Veuillez saisir le caractere a compter :");
        String lettre = saisieUtilisateur.nextLine();
        int count = 0;
        for(int i = 0;i<text.length();i++){
            String leter = String.valueOf(text.charAt(i));
            if(leter.equals(lettre)){
                count ++;
            }
        }
        System.out.println(count);
        /*
-----------------------------------------------Exo 8 Chat GPT-----------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
        */
    }
}