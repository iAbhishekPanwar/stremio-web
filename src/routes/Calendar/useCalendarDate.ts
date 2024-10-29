import { useCallback } from 'react';

const useCalendarDate = (profile: Profile) => {
    const toMonthYear = useCallback((calendarDate: CalendarDate | null): string => {
        if (!calendarDate) return '';

        const date = new Date();
        date.setMonth(calendarDate.month - 1);
        date.setFullYear(calendarDate.year);

        return date.toLocaleString(profile.settings.interfaceLanguage, {
            month: 'long',
            year: 'numeric',
        });
    }, [profile.settings]);

    const toDayMonth = useCallback((calendarDate: CalendarDate | null): string => {
        if (!calendarDate) return '';

        const date = new Date();
        date.setDate(calendarDate.day);
        date.setMonth(calendarDate.month - 1);

        return date.toLocaleString(profile.settings.interfaceLanguage, {
            day: 'numeric',
            month: 'short',
        });
    }, [profile.settings]);

    return {
        toMonthYear,
        toDayMonth,
    };
};

export default useCalendarDate;
