// Copyright (C) 2017-2024 Smart code 203358507

import React, { useMemo, useState } from 'react';
import { MainNavBars, BottomSheet, useProfile, withCoreSuspender } from 'stremio/common';
import Selector from './Selector';
import Table from './Table';
import List from './List';
import Details from './Details';
import Placeholder from './Placeholder';
import useCalendar from './useCalendar';
import useCalendarDate from './useCalendarDate';
import styles from './Calendar.less';

type Props = {
    urlParams: UrlParams,
};

const Calendar = ({ urlParams }: Props) => {
    const calendar = useCalendar(urlParams);
    const profile = useProfile();

    const { toDayMonth } = useCalendarDate(profile);

    const [selected, setSelected] = useState<CalendarDate | null>(null);

    const detailsTitle = useMemo(() => toDayMonth(selected), [selected, toDayMonth]);

    const onDetailsClose = () => {
        setSelected(null);
    };

    return (
        <MainNavBars className={styles['calendar']} route={'calendar'}>
            {
                profile.auth !== null ?
                    <div className={styles['content']}>
                        <div className={styles['main']}>
                            <Selector
                                selected={calendar.selected}
                                selectable={calendar.selectable}
                                profile={profile}
                            />
                            <Table
                                items={calendar.items}
                                selected={selected}
                                monthInfo={calendar.monthInfo}
                                onChange={setSelected}
                            />
                        </div>
                        <List
                            items={calendar.items}
                            selected={selected}
                            monthInfo={calendar.monthInfo}
                            profile={profile}
                            onChange={setSelected}
                        />
                        <BottomSheet title={detailsTitle} show={selected} onClose={onDetailsClose}>
                            <Details
                                selected={selected}
                                items={calendar.items}
                            />
                        </BottomSheet>
                    </div>
                    :
                    <Placeholder />
            }
        </MainNavBars>
    );
};

const CalendarFallback = () => (
    <MainNavBars className={styles['calendar']} />
);

export default withCoreSuspender(Calendar, CalendarFallback);
