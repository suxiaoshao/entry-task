import React, {useMemo} from 'react';
import {Pressable, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import styles from './styles';

export interface DateInputProps {
  date?: number;
  onChangeDate?: (date: number) => void;
  end?: boolean;
  minDate?: number;
  maxDate?: number;
}

export default function ({
  date: dateNumber,
  onChangeDate,
  end,
  maxDate,
  minDate,
}: DateInputProps) {
  const [open, setOpen] = React.useState(false);
  const date = useMemo(() => dayjs(dateNumber), [dateNumber]);
  return (
    <>
      <Pressable
        style={[styles.dateContainer, open && styles.activeDateContainer]}
        onPress={() => setOpen(true)}>
        <Text style={styles.dateText}>{date.format('DD/MM/YYYY')}</Text>
      </Pressable>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date.toDate()}
        onConfirm={newDate => {
          setOpen(false);
          if (end) {
            onChangeDate?.(dayjs(newDate).endOf('day').valueOf());
          } else {
            onChangeDate?.(dayjs(newDate).startOf('day').valueOf());
          }
        }}
        onCancel={() => {
          setOpen(false);
        }}
        maximumDate={maxDate ? dayjs(maxDate).toDate() : undefined}
        minimumDate={minDate ? dayjs(minDate).toDate() : undefined}
      />
    </>
  );
}
