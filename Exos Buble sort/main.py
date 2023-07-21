# This is a sample Python script.

# Press Maj+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.


def bubble_sort(list_to_sort):
    swapped = True
    while swapped:
        swapped = False
        for i in range(len(list_to_sort) - 1):
            if list_to_sort[i] > list_to_sort[i + 1]:
                list_to_sort[i], list_to_sort[i + 1] = list_to_sort[i + 1], list_to_sort[i]
                swapped = True
    return list_to_sort


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print(bubble_sort([41, 1, 74, 9, 22, 13, 24]))

# See PyCharm help at https://www.jetbrains.com/help/pycharm/


